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
    <section id="disciplines" className="w-full py-16 sm:py-24 lg:py-28 border-b border-[#D8CFC4] bg-[#F4F0EA]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Masthead */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 pb-10 sm:pb-14 border-b border-[#D8CFC4]/70 items-end">
          <Reveal className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#9A4D3E] font-medium">
                {PORTFOLIO_DATA.disciplinesSection.eyebrow}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2C2724] font-normal leading-[1.1]">
              {PORTFOLIO_DATA.disciplinesSection.title}
            </h2>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-4">
            <p className="text-sm sm:text-base text-[#59534E] font-light leading-relaxed">
              {PORTFOLIO_DATA.disciplinesSection.intro}
            </p>
          </Reveal>
        </div>

        {/* 3 Pillars Grid with Editorial Lines */}
        <motion.div
          variants={pillarContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-10 sm:pt-14 divide-y md:divide-y-0 md:divide-x divide-[#D8CFC4]/70"
        >
          {PORTFOLIO_DATA.disciplines.map((item, index) => {
            return (
              <motion.div
                key={item.num}
                variants={pillarItem}
                className={`flex flex-col justify-between gap-6 ${
                  index !== 0 ? 'pt-10 md:pt-0 md:pl-10 lg:pl-14' : ''
                }${index !== 2 ? ' md:pr-10 lg:pr-14' : ''}`}
              >
                <div className="space-y-5">
                  {/* Number & Icon */}
                  <div className="flex items-center justify-start">
                    <span className="font-serif text-3xl sm:text-4xl text-[#9A4D3E] font-light">
                      {item.num}
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

                {/* Bottom Capabilities Index — fixed row count keeps all columns aligned */}
                <div className="pt-5 border-t border-[#D8CFC4]/50">
                  <ul className="divide-y divide-[#D8CFC4]/50 border-b border-[#D8CFC4]/50">
                    {item.capabilities.map((capability) => (
                      <li key={capability} className="py-2.5 text-[10px] uppercase tracking-[0.22em] text-[#9A4D3E] font-medium">
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
