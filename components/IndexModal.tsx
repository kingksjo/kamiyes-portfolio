'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLenis } from 'lenis/react';
import { X, Search, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '@/lib/data';
import { springSnappy } from '@/lib/motion';

interface IndexModalProps {
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export function IndexModal({ onClose, onSelectProject }: IndexModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const lenis = useLenis();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    lenis?.stop();
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      lenis?.start();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lenis, onClose]);

  const filtered = PORTFOLIO_DATA.selectedProjects.filter((p) => {
    const query = searchQuery.toLowerCase();
    return (
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.subtitle.toLowerCase().includes(query) ||
      p.tags.some((t) => t.toLowerCase().includes(query))
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-[#2C2724]/75 backdrop-blur-sm"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        transition={springSnappy}
        data-lenis-prevent
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#FDFBF7] border border-[#D8CFC4] shadow-2xl z-10 flex flex-col"
      >
        
        {/* Header */}
        <div className="sticky top-0 z-20 bg-[#FDFBF7]/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-[#D8CFC4] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9A4D3E] font-medium">
              Archive Index
            </span>
            <span className="text-[#D8CFC4]">/</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#59534E]">
              Comprehensive Register
            </span>
          </div>

          <motion.button
            onClick={onClose}
            id="close-index-btn"
            whileHover={{ color: '#2C2724', borderColor: '#2C2724' }}
            whileTap={{ scale: 0.94 }}
            transition={springSnappy}
            className="p-2 text-[#59534E] border border-[#D8CFC4]"
            aria-label="Close archive index"
          >
            <X className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Search Bar */}
        <div className="p-6 sm:p-8 border-b border-[#D8CFC4]/70 bg-[#F4F0EA]/50">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-4 h-4 text-[#59534E]" />
            <input
              type="text"
              id="index-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search across models, algorithms, or regional studies..."
              className="w-full pl-11 pr-4 py-3 bg-[#FDFBF7] border border-[#D8CFC4] text-sm text-[#2C2724] placeholder-[#59534E]/60 focus:outline-none focus:border-[#9A4D3E]"
            />
          </div>
        </div>

        {/* Results List */}
        <div className="p-6 sm:p-8 divide-y divide-[#D8CFC4]/70">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-[#59534E] font-light text-sm">
              No archival entries correspond to your search query.
            </div>
          ) : (
            filtered.map((project) => (
              <motion.div
                key={project.id}
                onClick={() => {
                  onClose();
                  onSelectProject(project);
                }}
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={{
                  rest: { backgroundColor: 'rgba(253,251,247,0)' },
                  hover: { backgroundColor: 'rgba(244,240,234,0.4)' },
                }}
                transition={springSnappy}
                className="py-5 sm:py-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-2"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-[#9A4D3E]">
                    <span>{project.lookbookNumber}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                  <motion.h4
                    variants={{
                      rest: { color: '#2C2724' },
                      hover: { color: '#9A4D3E' },
                    }}
                    transition={springSnappy}
                    className="font-serif text-xl sm:text-2xl"
                  >
                    {project.name}
                  </motion.h4>
                  <p className="text-xs text-[#59534E] font-light max-w-xl">
                    {project.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <motion.span
                    variants={{
                      rest: { opacity: 0 },
                      hover: { opacity: 1 },
                    }}
                    transition={springSnappy}
                    className="text-[9px] uppercase tracking-widest text-[#2C2724]"
                  >
                    Inspect
                  </motion.span>
                  <motion.span
                    variants={{
                      rest: { x: 0, y: 0 },
                      hover: { x: 3, y: -3 },
                    }}
                    transition={springSnappy}
                    className="inline-flex"
                  >
                    <ArrowUpRight className="w-4 h-4 text-[#9A4D3E]" />
                  </motion.span>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Footer Note */}
        <div className="p-6 border-t border-[#D8CFC4] bg-[#F4F0EA]/30 text-center text-[10px] uppercase tracking-[0.2em] text-[#59534E]">
          {PORTFOLIO_DATA.name} • Portfolio Index
        </div>

      </motion.div>
    </motion.div>
  );
}
