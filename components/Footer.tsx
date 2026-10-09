'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/data';
import { Reveal } from '@/components/Reveal';
import { springSnappy } from '@/lib/motion';

interface FooterProps {
  onOpenConcierge: () => void;
}

export function Footer({ onOpenConcierge }: FooterProps) {
  return (
    <footer id="contact" className="w-full bg-[#9A4D3E] text-white pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 border-t border-[#833E31]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-16 sm:space-y-20">

        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="space-y-6">
            <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-white/80">
              How can I help
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-white">
              Let’s build practical solutions <br />
              <span className="italic font-light text-white/90">with AI.</span>
            </h2>
          </div>

          <motion.button
            onClick={onOpenConcierge}
            id="footer-open-concierge-btn"
            whileHover={{ y: -2, backgroundColor: '#FDFBF7' }}
            whileTap={{ scale: 0.97 }}
            transition={springSnappy}
            className="px-8 py-4 bg-white text-[#9A4D3E] text-[11px] uppercase tracking-[0.22em] font-medium text-center"
          >
            Get in Touch
          </motion.button>
        </Reveal>

        <div className="pt-10 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] uppercase tracking-[0.2em] text-white/70">
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.name} • All Rights Reserved
          </div>

          <div className="flex items-center gap-6">
            {PORTFOLIO_DATA.contact.socials.map((soc) => (
              <motion.a
                key={soc.name}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ color: '#FFFFFF' }}
                transition={springSnappy}
                className="inline-flex items-center gap-1.5 text-white/90"
              >
                <span>{soc.name}</span>
                <ArrowUpRight className="w-3 h-3" />
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
