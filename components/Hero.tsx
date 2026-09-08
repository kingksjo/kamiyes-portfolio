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
    <section ref={sectionRef} id="hero" className="relative w-full pt-8 pb-14 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24 border-b border-[#D8CFC4]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* Main Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-stretch">
          
          {/* Left Column: Typography Showcase */}
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-between space-y-6 lg:space-y-8"
          >
            <div className="space-y-4 sm:space-y-5">

              {/* Refined Small Label */}
              <motion.div
                variants={heroItem}
                className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4F0EA] border border-[#D8CFC4]/60 text-[10px] uppercase tracking-[0.25em] text-[#59534E]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#9A4D3E]" />
                {PORTFOLIO_DATA.name} — Portfolio
              </motion.div>

              {/* Large, Elegant Serif Statement */}
              <motion.h1
                variants={heroItem}
                className="font-serif text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] leading-[1.16] tracking-[-0.01em] text-[#2C2724] font-normal"
              >
                {PORTFOLIO_DATA.heroStatement}
              </motion.h1>

              {/* Subtext */}
              {PORTFOLIO_DATA.heroSubtext ? (
                <motion.p
                  variants={heroItem}
                  className="max-w-xl text-sm sm:text-base text-[#59534E] leading-relaxed font-light"
                >
                  {PORTFOLIO_DATA.heroSubtext}
                </motion.p>
              ) : null}
            </div>

            {/* Bottom Actions & Metadata */}
            <motion.div
              variants={heroItem}
              className="pt-6 sm:pt-8 border-t border-[#D8CFC4]/50 flex flex-wrap items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <motion.a
                  href="#projects"
                  id="hero-explore-btn"
                  whileHover={{ y: -2, backgroundColor: '#9A4D3E' }}
                  whileTap={{ scale: 0.97 }}
                  transition={springSnappy}
                  className="inline-flex items-center gap-3 px-5 py-3 bg-[#2C2724] text-[#FDFBF7] text-[10px] uppercase tracking-[0.22em]"
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
                  className="inline-flex items-center gap-2 px-5 py-3 border border-[#D8CFC4] text-[#2C2724] text-[10px] uppercase tracking-[0.22em] bg-transparent"
                >
                  <span>Get in Touch</span>
                </motion.button>
              </div>

              <div className="text-[10px] uppercase tracking-[0.2em] text-[#59534E]">
                3 Featured Projects
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
            <div className="relative w-full h-[360px] sm:h-[440px] lg:h-full min-h-[380px] lg:min-h-[440px] border border-[#D8CFC4] p-3 sm:p-4 bg-[#F4F0EA] flex flex-col justify-between overflow-hidden">

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
                    Applied Data Science
                  </p>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white/95 space-y-1">
                  <p className="font-serif text-lg italic text-[#FDFBF7]">
                    &ldquo;Turning complex data into practical products.&rdquo;
                  </p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#FDFBF7]/80">
                    Machine Learning & AI Engineering
                  </p>
                </div>
              </div>

              {/* Bottom Architectural Caption Details */}
              <div className="mt-3 pt-2 border-t border-[#D8CFC4]/60 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#59534E]">
                <span>Machine Learning Systems</span>
                <span>Ref. {PORTFOLIO_DATA.initials}-2024</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
