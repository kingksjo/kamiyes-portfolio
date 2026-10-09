'use client';

import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { useLenis } from 'lenis/react';
import { X } from 'lucide-react';
import { Project } from '@/lib/data';
import { springSnappy } from '@/lib/motion';

interface ProjectDossierModalProps {
  project: Project;
  onClose: () => void;
  onOpenConcierge: () => void;
}

export function ProjectDossierModal({
  project,
  onClose,
  onOpenConcierge,
}: ProjectDossierModalProps) {
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-[#2C2724]/70 backdrop-blur-sm"
    >
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        transition={springSnappy}
        data-lenis-prevent
        role="dialog"
        aria-modal="true"
        aria-label={`${project.name} project details`}
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#FDFBF7] border border-[#D8CFC4] shadow-2xl z-10 flex flex-col"
      >
        
        {/* Top Minimalist Header */}
        <div className="sticky top-0 z-20 bg-[#FDFBF7]/95 backdrop-blur-md px-6 sm:px-10 py-5 border-b border-[#D8CFC4] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9A4D3E] font-medium">
              Project {project.lookbookNumber}
            </span>
            <span className="text-[#D8CFC4]">/</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#59534E]">
              Overview • {project.year}
            </span>
          </div>

          <motion.button
            onClick={onClose}
            id="close-dossier-modal-btn"
            whileHover={{ color: '#2C2724', borderColor: '#2C2724' }}
            whileTap={{ scale: 0.94 }}
            transition={springSnappy}
            className="p-2 text-[#59534E] border border-[#D8CFC4]"
            aria-label="Close project modal"
          >
            <X className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 lg:p-12 space-y-12">
          
          {/* Header Title & Subtitle */}
          <div className="space-y-4">
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#9A4D3E] font-medium">
              {project.subtitle}
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2724] font-normal leading-tight">
              {project.name}
            </h2>
            <p className="text-base sm:text-lg text-[#59534E] font-light leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Visual Showcase + Metrics Split */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Performance Metrics Plate */}
              <div className="lg:col-span-12 p-6 sm:p-8 bg-[#F4F0EA] border border-[#D8CFC4] flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[#9A4D3E] font-medium border-b border-[#D8CFC4] pb-3">
                    Performance Metrics
                  </div>
                  
                  <div className="space-y-5 pt-2">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="flex flex-col">
                        <span className="font-serif text-3xl sm:text-4xl text-[#2C2724] font-normal">
                          {metric.value}
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#59534E] mt-1">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#D8CFC4] text-[9px] uppercase tracking-[0.2em] text-[#59534E]">
                  Key figures from the project
                </div>
              </div>
            </div>
          )}

          {/* Detailed Synthesis & Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 border-t border-[#D8CFC4]">
            <div className="md:col-span-4 text-[11px] uppercase tracking-[0.25em] text-[#2C2724] font-medium">
              Overview & Approach
            </div>
            <div className="md:col-span-8 space-y-4">
              <p className="text-sm sm:text-base text-[#59534E] font-light leading-relaxed">
                {project.longDescription}
              </p>
              
              {project.architecture && (
                <div className="p-4 bg-[#F4F0EA] border border-[#D8CFC4]/80 mt-4 space-y-2">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#9A4D3E] font-medium">
                    Tech Stack & Architecture
                  </div>
                  <p className="text-xs text-[#2C2724] font-sans leading-relaxed">
                    {project.architecture}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Tags & Classifications */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 border-t border-[#D8CFC4] items-center">
            <div className="md:col-span-4 text-[11px] uppercase tracking-[0.25em] text-[#2C2724] font-medium">
              Technologies & Tags
            </div>
            <div className="md:col-span-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] bg-[#F4F0EA] border border-[#D8CFC4] text-[#2C2724]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Action Drawer */}
          <div className="pt-8 border-t border-[#D8CFC4] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#59534E] font-light">
              Interested in discussing this project or building something similar?
            </div>
            
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 w-full sm:w-auto">
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, borderColor: '#2C2724' }}
                  whileTap={{ scale: 0.97 }}
                  transition={springSnappy}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 border border-[#D8CFC4] text-[#2C2724] text-[10px] uppercase tracking-[0.22em] whitespace-nowrap"
                >
                  <svg viewBox="0 0 16 16" aria-hidden="true" className="w-4 h-4 fill-current">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  View on GitHub
                </motion.a>
              )}
              {project.xUrl && (
                <motion.a
                  href={project.xUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, borderColor: '#2C2724' }}
                  whileTap={{ scale: 0.97 }}
                  transition={springSnappy}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 border border-[#D8CFC4] text-[#2C2724] text-[10px] uppercase tracking-[0.22em] whitespace-nowrap"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-3.5 h-3.5 fill-current">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                  Read on X
                </motion.a>
              )}
              <motion.button
                onClick={() => {
                  onClose();
                  onOpenConcierge();
                }}
                whileHover={{ y: -2, backgroundColor: '#833E31' }}
                whileTap={{ scale: 0.97 }}
                transition={springSnappy}
                className="w-full sm:w-auto px-4 sm:px-6 py-3 bg-[#9A4D3E] text-white text-[10px] uppercase tracking-[0.22em] text-center whitespace-nowrap"
              >
                Discuss This Project
              </motion.button>
              <motion.button
                onClick={onClose}
                whileHover={{ y: -2, borderColor: '#2C2724' }}
                whileTap={{ scale: 0.97 }}
                transition={springSnappy}
                className="w-full sm:w-auto px-4 sm:px-6 py-3 border border-[#D8CFC4] text-[#2C2724] text-[10px] uppercase tracking-[0.22em] whitespace-nowrap"
              >
                Close
              </motion.button>
            </div>
          </div>

        </div>

      </motion.div>
    </motion.div>
  );
}
