'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Search, Mail, Check, Menu, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/data';
import { springSnappy } from '@/lib/motion';

interface NavbarProps {
  onOpenConcierge: () => void;
  onOpenIndex: () => void;
}

export function Navbar({ onOpenConcierge, onOpenIndex }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#D8CFC4] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-20 sm:h-24 flex items-center justify-between">
        
        {/* Left: Brand Link */}
        <div className="flex items-center">
          <a
            href="#hero"
            className="block"
            id="nav-brand-link"
          >
            <motion.span
              whileHover={{ color: '#9A4D3E' }}
              transition={springSnappy}
              className="font-serif text-2xl sm:text-3xl font-normal text-[#2C2724]"
            >
              {PORTFOLIO_DATA.shortName}
            </motion.span>
          </a>
        </div>

        {/* Right Edge: Minimalist Navigation & Concierge */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <motion.button
            onClick={onOpenIndex}
            id="nav-catalogue-btn"
            whileHover={{ color: '#2C2724' }}
            transition={springSnappy}
            className="text-[11px] uppercase tracking-[0.2em] text-[#59534E] flex items-center gap-1.5"
            title="Open Lookbook Index"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Index</span>
          </motion.button>

          <motion.a
            href="#lookbook"
            id="nav-lookbook-link"
            whileHover={{ color: '#2C2724' }}
            transition={springSnappy}
            className="text-[11px] uppercase tracking-[0.2em] text-[#59534E]"
          >
            Lookbook
          </motion.a>

          <motion.a
            href="#disciplines"
            id="nav-disciplines-link"
            whileHover={{ color: '#2C2724' }}
            transition={springSnappy}
            className="text-[11px] uppercase tracking-[0.2em] text-[#59534E]"
          >
            Disciplines
          </motion.a>

          <motion.button
            onClick={onOpenConcierge}
            id="nav-concierge-btn"
            whileHover={{ y: -2, backgroundColor: '#2C2724', color: '#FDFBF7' }}
            whileTap={{ scale: 0.97 }}
            transition={springSnappy}
            className="inline-flex items-center gap-2 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-[#2C2724] border border-[#2C2724]"
          >
            <span>Inquiry</span>
            <ArrowUpRight className="w-3 h-3" />
          </motion.button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-3">
          <motion.button
            onClick={handleCopyEmail}
            whileTap={{ scale: 0.88 }}
            transition={springSnappy}
            className="p-2 text-[#2C2724]"
            title="Copy Email"
            id="mobile-copy-email-btn"
          >
            {copied ? <Check className="w-4 h-4 text-[#9A4D3E]" /> : <Mail className="w-4 h-4" />}
          </motion.button>
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.88 }}
            transition={springSnappy}
            className="p-2 text-[#2C2724]"
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="md:hidden border-t border-[#D8CFC4] bg-[#FDFBF7] px-6 py-8 space-y-6"
          >
          <div className="text-[10px] uppercase tracking-[0.25em] text-[#9A4D3E] font-medium">
            Directory
          </div>
          <div className="flex flex-col space-y-4">
            <motion.a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              whileHover={{ color: '#9A4D3E', x: 4 }}
              transition={springSnappy}
              className="font-serif text-2xl text-[#2C2724]"
            >
              Introduction
            </motion.a>
            <motion.a
              href="#lookbook"
              onClick={() => setMobileMenuOpen(false)}
              whileHover={{ color: '#9A4D3E', x: 4 }}
              transition={springSnappy}
              className="font-serif text-2xl text-[#2C2724]"
            >
              The Lookbook (Works)
            </motion.a>
            <motion.a
              href="#disciplines"
              onClick={() => setMobileMenuOpen(false)}
              whileHover={{ color: '#9A4D3E', x: 4 }}
              transition={springSnappy}
              className="font-serif text-2xl text-[#2C2724]"
            >
              Atelier Disciplines
            </motion.a>
            <motion.button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenIndex();
              }}
              whileHover={{ color: '#9A4D3E', x: 4 }}
              transition={springSnappy}
              className="font-serif text-2xl text-left text-[#2C2724]"
            >
              Catalog Index
            </motion.button>
          </div>

          <div className="pt-4 border-t border-[#D8CFC4] flex flex-col space-y-3">
            <motion.button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConcierge();
              }}
              whileTap={{ scale: 0.98 }}
              transition={springSnappy}
              className="w-full py-3 text-center text-[11px] uppercase tracking-[0.2em] bg-[#9A4D3E] text-white"
            >
              Concierge Inquiry
            </motion.button>
            <p className="text-center text-[10px] uppercase tracking-widest text-[#59534E]">
              {PORTFOLIO_DATA.title}
            </p>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
