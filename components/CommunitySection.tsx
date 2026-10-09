'use client';

import React from 'react';
import Image from 'next/image';
import { PORTFOLIO_DATA } from '@/lib/data';
import { Reveal } from '@/components/Reveal';

export function CommunitySection() {
  const { eyebrow, title, body, image, imageAlt } = PORTFOLIO_DATA.communitySection;

  return (
    <section id="community" className="w-full py-16 sm:py-24 lg:py-28 border-b border-[#D8CFC4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <Reveal className="lg:col-span-6 space-y-5">
          <span className="block text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#9A4D3E] font-medium">
            {eyebrow}
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#2C2724] font-normal leading-[1.1]">
            {title}
          </h2>

          <p className="text-sm sm:text-base text-[#59534E] font-light leading-relaxed max-w-md">
            {body}
          </p>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-5 lg:col-start-8">
          <div className="relative w-full aspect-[4/5] overflow-hidden border border-[#D8CFC4] bg-[#F4F0EA]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
