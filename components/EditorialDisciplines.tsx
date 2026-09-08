'use client';

import React from 'react';
import { motion, type Variants } from 'motion/react';
import { PORTFOLIO_DATA } from '@/lib/data';
import { Reveal } from '@/components/Reveal';

const pillarContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const pillarItem: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function EditorialDisciplines() {
  return (
    <section id="disciplines" className="w-full py-24 sm:py-32 lg:py-40 border-b border-[#D8CFC4] bg-[#F4F0EA]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Editorial Section Masthead */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-16 sm:pb-24 border-b border-[#D8CFC4]/70 items-end">
          <Reveal className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#9A4D3E] font-medium">
                The Analytical Method
              </span>
              <span className="text-[#D8CFC4]">/</span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#59534E]">
                Atelier Principles
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2C2724] font-normal leading-[1.1]">
              Mathematical Discipline <br />
              <span className="italic text-[#9A4D3E] font-light">meets</span> Tailored Precision
            </h2>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-4">
            <p className="text-sm sm:text-base text-[#59534E] font-light leading-relaxed">
              We reject black-box opacity and fragile heuristics. Every algorithmic model is cut and tailored like bespoke fabric—fitted to exact operational constraints, measurable return, and systemic stability.
            </p>
          </Reveal>
        </div>

        {/* 3 Pillars Grid with Massive Padding & Editorial Lines */}
        <motion.div
          variants={pillarContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pt-16 sm:pt-20 divide-y md:divide-y-0 md:divide-x divide-[#D8CFC4]/70"
        >
          {PORTFOLIO_DATA.disciplines.map((item, index) => {
            return (
              <motion.div
                key={item.num}
                variants={pillarItem}
                className={`flex flex-col justify-between space-y-8 ${
                  index !== 0 ? 'pt-10 md:pt-0 md:pl-12 lg:pl-16' : ''
                }`}
              >
                <div className="space-y-6">
                  {/* Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl sm:text-4xl text-[#9A4D3E] font-light">
                      {item.num}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#59534E] font-medium">
                      Atelier Pillar
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#2C2724] font-normal leading-snug">
                    {item.title}
                  </h3>

                  {/* Body */}
                  <p className="text-sm text-[#59534E] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Tag */}
                <div className="pt-6 border-t border-[#D8CFC4]/50">
                  <div className="text-[9px] uppercase tracking-[0.25em] text-[#9A4D3E] font-medium">
                    {item.accent}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* High-Fashion Quote Card / Manifesto */}
        <Reveal className="mt-20 sm:mt-28 p-8 sm:p-12 lg:p-16 border border-[#D8CFC4] bg-[#FDFBF7] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-2">
            <p className="font-serif text-xl sm:text-2xl lg:text-3xl italic text-[#2C2724] leading-relaxed">
              &ldquo;Data is not merely an asset to exploit; it is raw material to be sculpted with empirical honesty and aesthetic grace.&rdquo;
            </p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#59534E]">
              {PORTFOLIO_DATA.name} • {PORTFOLIO_DATA.title}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-[#D8CFC4] flex items-center justify-center bg-[#F4F0EA]">
              <span className="font-serif text-lg text-[#9A4D3E] italic">OS</span>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
