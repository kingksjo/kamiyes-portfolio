'use client'

import { MotionConfig, useReducedMotion } from 'motion/react'
import { ReactLenis } from 'lenis/react'
import type { ReactNode } from 'react'

interface SmoothScrollProps {
  children: ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <MotionConfig reducedMotion="user">
      <ReactLenis
        root
        options={{
          // Instant (unsmoothed) scrolling for users who prefer reduced motion.
          lerp: prefersReducedMotion ? 1 : 0.09,
          // Animate in-page anchor links (#lookbook, #disciplines, #contact).
          anchors: true,
        }}
      >
        {children}
      </ReactLenis>
    </MotionConfig>
  )
}
