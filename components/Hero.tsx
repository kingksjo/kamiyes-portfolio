'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/data';
import { springSnappy } from '@/lib/motion';

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
  const plateY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ['0%', '0%'] : ['0%', '8%']
  );

  return (
    <section ref={sectionRef} id="hero" className="relative w-full pt-12 pb-20 sm:pt-20 sm:pb-32 lg:pt-24 lg:pb-36 border-b border-[#D8CFC4]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* Subtle Top Editorial Eyebrow / Catalog Meta */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 sm:pb-12 border-b border-[#D8CFC4]/50 gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#9A4D3E] font-medium">
              Collection N° 01
            </span>
            <span className="text-[#D8CFC4]">/</span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#59534E]">
              Data Science & Applied AI
            </span>
          </div>

          <div className="flex items-center text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#59534E]">
            <span>Bespoke Algorithmic Craft</span>
          </div>
        </motion.div>

        {/* Main Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 sm:pt-16 lg:pt-20 items-stretch">
          
          {/* Left Column: Typography Showcase */}
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-between space-y-10 lg:space-y-16"
          >
            <div className="space-y-8">

              {/* Refined Small Label */}
              <motion.div
                variants={heroItem}
                className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4F0EA] border border-[#D8CFC4]/60 text-[10px] uppercase tracking-[0.25em] text-[#59534E]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#9A4D3E]" />
                Oluwakamiye Sharaye — Atelier Dossier
              </motion.div>

              {/* Large, Elegant Serif Statement */}
              <motion.h1
                variants={heroItem}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] leading-[1.08] tracking-[-0.01em] text-[#2C2724] font-normal"
              >
                Applying machine learning, statistical modeling, and generative AI to{' '}
                <span className="italic font-light text-[#9A4D3E]">business</span> and{' '}
                <span className="italic font-light text-[#2C2724]">product</span> problems.
              </motion.h1>

              {/* Editorial Subtext */}
              <motion.p
                variants={heroItem}
                className="max-w-xl text-base sm:text-lg text-[#59534E] leading-relaxed font-light"
              >
                {PORTFOLIO_DATA.ethos}
              </motion.p>
            </div>

            {/* Bottom Actions & Metadata */}
            <motion.div
              variants={heroItem}
              className="pt-6 border-t border-[#D8CFC4]/50 flex flex-wrap items-center justify-between gap-6"
            >
              <div className="flex items-center gap-4">
                <motion.a
                  href="#lookbook"
                  id="hero-explore-btn"
                  whileHover={{ y: -2, backgroundColor: '#9A4D3E' }}
                  whileTap={{ scale: 0.97 }}
                  transition={springSnappy}
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#2C2724] text-[#FDFBF7] text-[11px] uppercase tracking-[0.22em]"
                >
                  <span>Explore Lookbook</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </motion.a>

                <motion.button
                  onClick={onOpenConcierge}
                  id="hero-inquiry-btn"
                  whileHover={{ y: -2, borderColor: '#2C2724' }}
                  whileTap={{ scale: 0.97 }}
                  transition={springSnappy}
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#D8CFC4] text-[#2C2724] text-[11px] uppercase tracking-[0.22em] bg-transparent"
                >
                  <span>Private Consultation</span>
                </motion.button>
              </div>

              <div className="text-[10px] uppercase tracking-[0.2em] text-[#59534E]">
                3 Featured Works Selected
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: High-Quality Muted Architectural / Sculptural Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="relative w-full h-[460px] sm:h-[580px] lg:h-full min-h-[500px] border border-[#D8CFC4] p-3 sm:p-4 bg-[#F4F0EA] flex flex-col justify-between overflow-hidden">

              {/* Inner Picture Container with scroll parallax and hover zoom */}
              <div className="relative w-full h-full overflow-hidden bg-[#EAE4DC]">
                <motion.div
                  style={{ y: plateY }}
                  whileHover={{ scale: 1.03 }}
                  transition={springSnappy}
                  className="absolute -inset-y-[10%] inset-x-0"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
                    alt="Minimalist architectural curves with natural shadowplay, evoking quiet luxury"
                    fill
                    priority
                    className="object-cover object-center grayscale-[20%] contrast-[95%] brightness-[98%]"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>

                {/* Subtle Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2724]/40 via-transparent to-transparent opacity-60" />

                {/* Corner Architectural Stamp */}
                <div className="absolute top-4 left-4 z-10 bg-[#FDFBF7]/90 backdrop-blur-sm px-3 py-1.5 border border-[#D8CFC4]/80">
                  <p className="text-[9px] uppercase tracking-[0.25em] text-[#2C2724] font-medium">
                    PLATE I — ARCHITECTURAL CADENCE
                  </p>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white/95 space-y-1">
                  <p className="font-serif text-lg italic text-[#FDFBF7]">
                    &ldquo;Form follows mathematical restraint.&rdquo;
                  </p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#FDFBF7]/80">
                    Precision Engineered Machine Learning
                  </p>
                </div>
              </div>

              {/* Bottom Architectural Caption Details */}
              <div className="mt-3 pt-2 border-t border-[#D8CFC4]/60 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#59534E]">
                <span>Figure 00 // Equilibrium</span>
                <span>Ref. OS-2024-DS</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
