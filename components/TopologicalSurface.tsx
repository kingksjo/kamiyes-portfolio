'use client'

import React, { useEffect, useRef } from 'react'
import { useReducedMotion } from 'motion/react'

// Vertical band (as a fraction of the hero height) occupied by the dot field.
// Kept in the lower portion so the headline and copy above stay unobstructed.
const BAND_START = 0.55
const BAND_END = 1.02

export function TopologicalSurface() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let animationFrameId: number
    let width = 0
    let height = 0
    let time = 0
    let isVisible = true

    // Responsive high-DPI sizing (reset transform each time so repeated
    // resizes/orientation changes don't compound the DPR scale)
    const resize = () => {
      const rect = container.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height

      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()

    const resizeObserver = new ResizeObserver(() => {
      resize()
      if (prefersReducedMotion) {
        drawFrame(0)
      }
    })
    resizeObserver.observe(container)

    // Automatically pause RAF loop when out of viewport
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
      },
      { threshold: 0.05 }
    )
    intersectionObserver.observe(container)

    // Draw single frame of the ambient dot field
    const drawFrame = (t: number) => {
      if (!ctx || width === 0 || height === 0) return

      ctx.clearRect(0, 0, width, height)

      // Layout geometry — dot field confined to the lower band of the hero.
      // Sparser, slightly larger dots on narrow screens so they read as a
      // dot field instead of merging into faint lines.
      const isCompact = width < 640
      const numSlices = isCompact ? 14 : 20
      const startY = height * BAND_START
      const endY = height * BAND_END
      const pointsPerSlice = isCompact ? 40 : 64
      const dotRadius = isCompact ? 1.65 : 1.2
      const leftPad = -width * 0.06
      const rightPad = width * 1.06
      const sliceWidth = rightPad - leftPad

      // Autonomous wander: a slow drifting center of motion so the field
      // feels alive without any pointer input
      const wanderX = 0.5 + 0.3 * Math.sin(t * 0.32)
      const wanderV = 0.5 + 0.3 * Math.sin(t * 0.24 + 1.3)

      // Dynamic terracotta highlight slices
      // One slice follows the wander position as it drifts
      const wanderSliceIndex = Math.floor(numSlices * wanderV)
      // Second slice stays as a subtle anchor near the golden ratio
      const anchorSliceIndex = Math.floor(numSlices * 0.44)

      for (let i = 0; i < numSlices; i++) {
        const v = i / (numSlices - 1)
        const baseY = startY + v * (endY - startY)

        const points: { x: number; y: number; r: number }[] = []

        for (let j = 0; j <= pointsPerSlice; j++) {
          const u = j / pointsPerSlice
          const x = leftPad + u * sliceWidth

          // Envelope tapering at the left and right canvas edges
          const envelope = Math.pow(Math.sin(Math.PI * Math.max(0, Math.min(1, u))), 0.85)

          // 1. Living breathing waves (layered harmonics)
          const wave1 = Math.sin(u * 5.4 + t * 1.0 + v * 3.6) * (30 * envelope)
          const wave2 = Math.cos(u * 7.8 - t * 0.75 + v * 2.2) * (20 * envelope)
          const wave3 = Math.sin(u * 2.8 + t * 0.5 + v * 1.6) * (22 * envelope)

          // 2. Continuous topographic saddle in the center-right
          const saddle =
            Math.sin(t * 0.7 + 1.2) *
            28 *
            Math.exp(-((u - 0.62) * (u - 0.62) + (v - 0.5) * (v - 0.5)) / 0.08) *
            envelope

          // 3. Drifting attractor around the wander center (magnetic swell)
          const dx = u - wanderX
          const dy = v - wanderV
          const distSq = dx * dx + dy * dy
          const attractorCore = Math.exp(-distSq / 0.035)
          const wanderDeflection =
            (-40 * attractorCore - Math.sin(t * 4 + distSq * 35) * 10 * attractorCore) * envelope

          const elevation = wave1 + wave2 + wave3 + saddle + wanderDeflection
          const y = baseY - elevation

          // Dot size tapers with the envelope so the field dissolves at the edges
          const r = dotRadius * (0.35 + 0.65 * envelope)

          points.push({ x, y, r })
        }

        const isWanderSlice = i === wanderSliceIndex
        const isAnchorSlice = i === anchorSliceIndex

        // Batch all dots of a slice into a single path, then fill once
        ctx.beginPath()
        for (const p of points) {
          ctx.moveTo(p.x + p.r, p.y)
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        }

        if (isWanderSlice) {
          ctx.fillStyle = '#9A4D3E'
          ctx.globalAlpha = 0.85
        } else if (isAnchorSlice) {
          ctx.fillStyle = '#9A4D3E'
          ctx.globalAlpha = 0.55
        } else {
          ctx.fillStyle = '#2C2724'
          // Perspective depth fading
          ctx.globalAlpha = 0.22 + 0.34 * Math.pow(v, 1.2)
        }
        ctx.fill()
      }
    }

    // Animation Loop
    const loop = () => {
      if (isVisible) {
        time += 0.016
        drawFrame(time)
      }
      animationFrameId = requestAnimationFrame(loop)
    }

    if (prefersReducedMotion) {
      drawFrame(1.5)
    } else {
      animationFrameId = requestAnimationFrame(loop)
    }

    return () => {
      cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
    }
  }, [prefersReducedMotion])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
      />
    </div>
  )
}
