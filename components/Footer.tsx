'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/data';
import { Reveal } from '@/components/Reveal';
import { springSnappy } from '@/lib/motion';

interface FooterProps {
  onOpenConcierge: () => void;
}

export function Footer({ onOpenConcierge }: FooterProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <footer id="contact" className="w-full bg-[#9A4D3E] text-white pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24 border-t border-[#833E31]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-20 sm:space-y-28">
        
        {/* Massive Top Hero Callout inside the Terracotta block */}
        <Reveal className="border-b border-white/20 pb-16 sm:pb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="space-y-6 max-w-3xl">
            <div className="flex items-center gap-3 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-white/80">
              <span>Contact</span>
              <span>/</span>
              <span>Get in Touch</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-white">
              Let’s build practical solutions <br />
              <span className="italic font-light text-white/90">with data and machine learning.</span>
            </h2>

            <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed max-w-xl">
              Open to conversations about data science roles, applied machine learning projects, and building data-driven products.
            </p>
          </div>

          {/* Quick Action in Footer */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
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
            <motion.a
              href={`mailto:${PORTFOLIO_DATA.contact.email}`}
              whileHover={{ y: -2, borderColor: '#FFFFFF' }}
              whileTap={{ scale: 0.97 }}
              transition={springSnappy}
              className="px-8 py-4 border border-white/60 text-white text-[11px] uppercase tracking-[0.22em] text-center flex items-center justify-center gap-2"
            >
              <span>Send Email</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.a>
          </div>
        </Reveal>

        {/* Minimalist 4-Column Grid */}
        <Reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14 pt-4 text-white/90">
          
          {/* Column 1: About & Identity */}
          <div className="space-y-4">
            <div className="text-[10px] uppercase tracking-[0.25em] text-white/60 font-medium pb-2 border-b border-white/20">
              About
            </div>
            <div className="space-y-2">
              <p className="font-serif text-2xl tracking-wider text-white uppercase">
                {PORTFOLIO_DATA.name}
              </p>
              <p className="text-xs text-white/80 font-light leading-relaxed">
                {PORTFOLIO_DATA.title}
              </p>
              <p className="text-[11px] text-white/70 font-light pt-2">
                {PORTFOLIO_DATA.contact.availability}
              </p>
            </div>
          </div>

          {/* Column 2: Direct Contact */}
          <div className="space-y-4">
            <div className="text-[10px] uppercase tracking-[0.25em] text-white/60 font-medium pb-2 border-b border-white/20">
              Contact
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-white/60">Direct Email</p>
                <a
                  href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                  className="font-serif text-lg text-white hover:underline block pt-0.5"
                >
                  {PORTFOLIO_DATA.contact.email}
                </a>
              </div>

              <motion.button
                onClick={handleCopyEmail}
                id="footer-copy-email-btn"
                whileHover={{ color: '#FFFFFF' }}
                whileTap={{ scale: 0.97 }}
                transition={springSnappy}
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-wider text-white/80 pt-1"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-300" />
                    <span>Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </motion.button>

              <p className="text-xs text-white/75 font-light pt-2">
                Typically answered within 24–48 hours.
              </p>
            </div>
          </div>

          {/* Column 3: Capabilities */}
          <div className="space-y-4">
            <div className="text-[10px] uppercase tracking-[0.25em] text-white/60 font-medium pb-2 border-b border-white/20">
              Disciplines
            </div>
            <ul className="space-y-2 text-xs text-white/85 font-light">
              <li>
                • Predictive Modeling & Machine Learning
              </li>
              <li>
                • Recommender Systems & Search
              </li>
              <li>
                • Geospatial Analysis & Public Systems
              </li>
              <li>
                • Containerized Microservices & APIs
              </li>
              <li>
                • Applied AI & Product Engineering
              </li>
            </ul>
          </div>

          {/* Column 4: Professional Networks */}
          <div className="space-y-4">
            <div className="text-[10px] uppercase tracking-[0.25em] text-white/60 font-medium pb-2 border-b border-white/20">
              Connect
            </div>
            <div className="space-y-2.5">
              {PORTFOLIO_DATA.contact.socials.map((soc) => (
                <motion.a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4, color: '#FFFFFF' }}
                  transition={springSnappy}
                  className="flex items-center justify-between py-1 text-xs text-white/90 border-b border-white/10"
                >
                  <span className="uppercase tracking-wider text-[11px]">{soc.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/60" />
                </motion.a>
              ))}

              <motion.a
                href="#projects"
                whileHover={{ x: 4, color: '#FFFFFF' }}
                transition={springSnappy}
                className="flex items-center justify-between py-1 text-xs text-white/90 border-b border-white/10"
              >
                <span className="uppercase tracking-wider text-[11px]">Selected Projects</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/60" />
              </motion.a>
            </div>
          </div>

        </Reveal>

        {/* Bottom Bar: Luxury Legal & Typography Colophon */}
        <div className="pt-12 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] uppercase tracking-[0.2em] text-white/70">
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.name} • All Rights Reserved
          </div>

          <div className="text-center md:text-right">
            Applied Machine Learning & Statistical Modeling
          </div>
        </div>

      </div>
    </footer>
  );
}
