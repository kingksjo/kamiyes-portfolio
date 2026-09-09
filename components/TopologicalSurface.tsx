'use client'

import React, { useEffect, useRef } from 'react'
import { useReducedMotion } from 'motion/react'

interface Ripple {
  x: number
  y: number
  radius: number
  intensity: number
}

export function TopologicalSurface() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const stateRef = useRef<{
    x: number
    y: number
    targetX: number
    targetY: number
    vx: number
    vy: number
    speed: number
    isHovered: boolean
    ripples: Ripple[]
  }>({
    x: 0.65,
    y: 0.45,
    targetX: 0.65,
    targetY: 0.45,
    vx: 0,
    vy: 0,
    speed: 0,
    isHovered: false,
    ripples: [],
  })

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

    // Responsive high-DPI sizing
    const resize = () => {
      const rect = container.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height

      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.scale(dpr, dpr)
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

    // Global pointer listeners to track mouse and mobile touches seamlessly
    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      // Detect if pointer is within or near hero section
      const isInside =
        e.clientY >= rect.top - 40 &&
        e.clientY <= rect.bottom + 40 &&
        e.clientX >= rect.left - 20 &&
        e.clientX <= rect.right + 20

      if (isInside) {
        const nx = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
        const ny = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height))
        stateRef.current.targetX = nx
        stateRef.current.targetY = ny
        stateRef.current.isHovered = true
      } else {
        stateRef.current.isHovered = false
        stateRef.current.targetX = 0.65
        stateRef.current.targetY = 0.45
      }
    }

    const handlePointerDown = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      const isInside =
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right

      if (isInside) {
        const nx = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
        const ny = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height))
        stateRef.current.targetX = nx
        stateRef.current.targetY = ny
        stateRef.current.isHovered = true

        // Spawn interactive shockwave ripple on tap/click
        stateRef.current.ripples.push({
          x: nx,
          y: ny,
          radius: 0.01,
          intensity: 1.0,
        })
      }
    }

    const handlePointerLeave = () => {
      stateRef.current.isHovered = false
      stateRef.current.targetX = 0.65
      stateRef.current.targetY = 0.45
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerdown', handlePointerDown, { passive: true })
    document.addEventListener('pointerleave', handlePointerLeave, { passive: true })

    // Draw single frame of the alive topological manifold
    const drawFrame = (t: number) => {
      if (!ctx || width === 0 || height === 0) return

      const s = stateRef.current

      // Spring physics for smooth fluid cursor glide
      const spring = 0.09
      const friction = 0.84
      s.vx += (s.targetX - s.x) * spring
      s.vy += (s.targetY - s.y) * spring
      s.vx *= friction
      s.vy *= friction
      s.x += s.vx
      s.y += s.vy

      const velocity = Math.hypot(s.vx, s.vy)
      s.speed += (velocity - s.speed) * 0.12

      // Update interactive ripples
      for (let r = s.ripples.length - 1; r >= 0; r--) {
        const rip = s.ripples[r]
        rip.radius += 0.012
        rip.intensity *= 0.965
        if (rip.intensity < 0.02 || rip.radius > 0.8) {
          s.ripples.splice(r, 1)
        }
      }

      ctx.clearRect(0, 0, width, height)

      // Layout geometry
      const numSlices = 28
      const startY = height * 0.1
      const endY = height * 0.95
      const pointsPerSlice = 75
      const leftPad = -width * 0.06
      const rightPad = width * 1.06
      const sliceWidth = rightPad - leftPad

      // Dynamic terracotta highlight slices
      // One slice follows cursor Y position when active
      const cursorSliceIndex = Math.floor(numSlices * s.y)
      // Second slice stays as a subtle anchor near the golden ratio
      const anchorSliceIndex = Math.floor(numSlices * 0.44)

      for (let i = 0; i < numSlices; i++) {
        const v = i / (numSlices - 1)
        const baseY = startY + v * (endY - startY)

        const points: { x: number; y: number }[] = []

        for (let j = 0; j <= pointsPerSlice; j++) {
          const u = j / pointsPerSlice
          const x = leftPad + u * sliceWidth

          // Envelope tapering at the left and right canvas edges
          const envelope = Math.pow(Math.sin(Math.PI * Math.max(0, Math.min(1, u))), 0.85)

          // 1. Natural living breathing waves (higher visibility, layered harmonics)
          const wave1 = Math.sin(u * 5.4 + t * 0.85 + v * 3.6) * (24 * envelope)
          const wave2 = Math.cos(u * 7.8 - t * 0.65 + v * 2.2) * (16 * envelope)
          const wave3 = Math.sin(u * 2.8 + t * 0.4 + v * 1.6) * (18 * envelope)

          // 2. Continuous topographic saddle in the center-right
          const saddle =
            Math.sin(t * 0.7 + 1.2) *
            28 *
            Math.exp(-((u - 0.62) * (u - 0.62) + (v - 0.5) * (v - 0.5)) / 0.08) *
            envelope

          // 3. Dynamic mouse attractor (magnetic deflection + speed wave)
          const dx = u - s.x
          const dy = v - s.y
          const distSq = dx * dx + dy * dy
          const attractorCore = Math.exp(-distSq / 0.035)

          // Depth deflection towards cursor + dynamic ripple wake
          const cursorDeflection = s.isHovered
            ? (-44 * attractorCore - Math.sin(t * 4 + distSq * 35) * (12 * s.speed + 6) * attractorCore) * envelope
            : 0

          // 4. Interactive shockwave ripples from clicks / taps
          let rippleElevation = 0
          for (const rip of s.ripples) {
            const d = Math.hypot(u - rip.x, v - rip.y)
            const ringDist = Math.abs(d - rip.radius)
            if (ringDist < 0.12) {
              const waveShape = Math.sin((d - rip.radius) * 45)
              const decay = Math.exp(-ringDist * 25)
              rippleElevation += waveShape * decay * rip.intensity * 32 * envelope
            }
          }

          const elevation = wave1 + wave2 + wave3 + saddle + cursorDeflection + rippleElevation
          const y = baseY - elevation

          points.push({ x, y })
        }

        // Fill underneath to create 3D tactile occlusion with parchment color (#FDFBF7)
        ctx.beginPath()
        ctx.moveTo(leftPad, height + 50)
        ctx.lineTo(points[0].x, points[0].y)

        for (let j = 1; j < points.length; j++) {
          const prev = points[j - 1]
          const curr = points[j]
          const cpx = (prev.x + curr.x) / 2
          const cpy = (prev.y + curr.y) / 2
          ctx.quadraticCurveTo(prev.x, prev.y, cpx, cpy)
        }
        ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y)
        ctx.lineTo(rightPad, height + 50)
        ctx.closePath()

        ctx.fillStyle = '#FDFBF7'
        ctx.globalAlpha = 0.92
        ctx.fill()

        // Stroke top contour hairline curve
        ctx.beginPath()
        ctx.moveTo(points[0].x, points[0].y)
        for (let j = 1; j < points.length; j++) {
          const prev = points[j - 1]
          const curr = points[j]
          const cpx = (prev.x + curr.x) / 2
          const cpy = (prev.y + curr.y) / 2
          ctx.quadraticCurveTo(prev.x, prev.y, cpx, cpy)
        }
        ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y)

        const isCursorSlice = i === cursorSliceIndex && s.isHovered
        const isAnchorSlice = i === anchorSliceIndex

        if (isCursorSlice) {
          ctx.strokeStyle = '#9A4D3E'
          ctx.lineWidth = 1.6
          ctx.globalAlpha = 0.9
        } else if (isAnchorSlice) {
          ctx.strokeStyle = '#9A4D3E'
          ctx.lineWidth = 1.2
          ctx.globalAlpha = 0.55
        } else {
          ctx.strokeStyle = '#2C2724'
          ctx.lineWidth = 0.9
          // Perspective depth fading
          ctx.globalAlpha = 0.14 + 0.28 * Math.pow(v, 1.2)
        }
        ctx.stroke()
      }

      // Draw subtle interactive focal ring at cursor location
      if (s.isHovered) {
        const cx = leftPad + s.x * sliceWidth
        const cy = startY + s.y * (endY - startY)

        ctx.save()
        ctx.strokeStyle = '#9A4D3E'
        ctx.lineWidth = 1.2
        ctx.globalAlpha = 0.75
        ctx.beginPath()
        ctx.arc(cx, cy, 6, 0, Math.PI * 2)
        ctx.stroke()

        // Subtle outer pulse
        const pulse = (Math.sin(t * 3.5) + 1) / 2
        ctx.beginPath()
        ctx.arc(cx, cy, 9 + pulse * 7, 0, Math.PI * 2)
        ctx.strokeStyle = '#9A4D3E'
        ctx.globalAlpha = 0.22 * (1 - pulse)
        ctx.stroke()

        ctx.restore()
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
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('pointerleave', handlePointerLeave)
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
