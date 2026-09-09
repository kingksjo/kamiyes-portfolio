'use client';

import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/data';
import { springSnappy } from '@/lib/motion';
import { TopologicalSurface } from '@/components/TopologicalSurface';

interface HeroProps {
  onOpenConcierge: () => void;
}

const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function Hero({ onOpenConcierge }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ['0%', '0%'] : ['0%', '10%']
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full pt-10 pb-16 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-32 border-b border-[#D8CFC4]/70 overflow-hidden"
    >
      {/* Dynamic Background Topological Loss Surface with scroll parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <TopologicalSurface />
      </motion.div>

      {/* Gentle Vignette for text readability while keeping contour lines clearly visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7]/85 via-[#FDFBF7]/40 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl space-y-6 sm:space-y-8"
        >
          {/* Refined Category Chip */}
          <motion.div
            variants={heroItem}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4F0EA]/90 backdrop-blur-sm border border-[#D8CFC4]/70 text-[10px] uppercase tracking-[0.25em] text-[#59534E]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#9A4D3E]" />
            {PORTFOLIO_DATA.name} — Portfolio
          </motion.div>

          {/* Large, Elegant Serif Statement */}
          <motion.h1
            variants={heroItem}
            className="font-serif text-3xl sm:text-5xl lg:text-[52px] xl:text-[58px] leading-[1.14] tracking-[-0.015em] text-[#2C2724] font-medium"
          >
            {PORTFOLIO_DATA.heroStatement}
          </motion.h1>

          {/* Subtext */}
          {PORTFOLIO_DATA.heroSubtext ? (
            <motion.p
              variants={heroItem}
              className="max-w-2xl text-base sm:text-lg text-[#59534E] leading-relaxed font-light"
            >
              {PORTFOLIO_DATA.heroSubtext}
            </motion.p>
          ) : null}

          {/* Bottom Actions & Metadata */}
          <motion.div
            variants={heroItem}
            className="pt-8 sm:pt-10 border-t border-[#D8CFC4]/60 flex flex-wrap items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <motion.a
                href="#projects"
                id="hero-explore-btn"
                whileHover={{ y: -2, backgroundColor: '#9A4D3E' }}
                whileTap={{ scale: 0.97 }}
                transition={springSnappy}
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#2C2724] text-[#FDFBF7] text-[10px] uppercase tracking-[0.22em]"
              >
                <span>View Projects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </motion.a>

              <motion.button
                onClick={onOpenConcierge}
                id="hero-inquiry-btn"
                whileHover={{ y: -2, borderColor: '#2C2724' }}
                whileTap={{ scale: 0.97 }}
                transition={springSnappy}
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#D8CFC4] text-[#2C2724] text-[10px] uppercase tracking-[0.22em] bg-[#FDFBF7]/80 backdrop-blur-sm"
              >
                <span>Get in Touch</span>
              </motion.button>
            </div>

            <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-[#59534E]">
              <span className="hidden sm:inline">3 Featured Projects</span>
              <span className="hidden sm:inline text-[#D8CFC4]">•</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9A4D3E] animate-pulse" />
                Interactive Field
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
