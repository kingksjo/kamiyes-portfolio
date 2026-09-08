'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
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
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#FDFBF7] border border-[#D8CFC4] shadow-2xl z-10 flex flex-col"
      >
        
        {/* Top Minimalist Header */}
        <div className="sticky top-0 z-20 bg-[#FDFBF7]/95 backdrop-blur-md px-6 sm:px-10 py-5 border-b border-[#D8CFC4] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9A4D3E] font-medium">
              {project.lookbookNumber}
            </span>
            <span className="text-[#D8CFC4]">/</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#59534E]">
              Technical Dossier • {project.year}
            </span>
          </div>

          <motion.button
            onClick={onClose}
            id="close-dossier-modal-btn"
            whileHover={{ color: '#2C2724', borderColor: '#2C2724' }}
            whileTap={{ scale: 0.94 }}
            transition={springSnappy}
            className="p-2 text-[#59534E] border border-[#D8CFC4]"
            aria-label="Close dossier"
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Visual Plate */}
            <div className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden border border-[#D8CFC4] bg-[#F4F0EA]">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                className="object-cover object-center grayscale-[10%]"
                sizes="(max-width: 1024px) 100vw, 60vw"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-[#FDFBF7]/90 px-3 py-1 border border-[#D8CFC4] text-[9px] uppercase tracking-[0.25em] text-[#2C2724]">
                Exhibit Visual Plate
              </div>
            </div>

            {/* Performance Metrics Plate */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-[#F4F0EA] border border-[#D8CFC4] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#9A4D3E] font-medium border-b border-[#D8CFC4] pb-3">
                  Empirical Performance Indices
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
                Empirically validated on production telemetry
              </div>
            </div>
          </div>

          {/* Detailed Synthesis & Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 border-t border-[#D8CFC4]">
            <div className="md:col-span-4 text-[11px] uppercase tracking-[0.25em] text-[#2C2724] font-medium">
              Architectural Methodology
            </div>
            <div className="md:col-span-8 space-y-4">
              <p className="text-sm sm:text-base text-[#59534E] font-light leading-relaxed">
                {project.longDescription}
              </p>
              
              <div className="p-4 bg-[#F4F0EA] border border-[#D8CFC4]/80 mt-4 space-y-2">
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#9A4D3E] font-medium">
                  Pipeline & Infrastructure
                </div>
                <p className="text-xs text-[#2C2724] font-sans leading-relaxed">
                  {project.architecture}
                </p>
              </div>
            </div>
          </div>

          {/* Tags & Classifications */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 border-t border-[#D8CFC4] items-center">
            <div className="md:col-span-4 text-[11px] uppercase tracking-[0.25em] text-[#2C2724] font-medium">
              Taxonomy & Domain
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
              Interested in implementing or licensing a comparable model architecture?
            </div>
            
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <motion.button
                onClick={() => {
                  onClose();
                  onOpenConcierge();
                }}
                whileHover={{ y: -2, backgroundColor: '#833E31' }}
                whileTap={{ scale: 0.97 }}
                transition={springSnappy}
                className="flex-1 sm:flex-none px-6 py-3 bg-[#9A4D3E] text-white text-[10px] uppercase tracking-[0.22em] text-center"
              >
                Inquire Regarding This Model
              </motion.button>
              <motion.button
                onClick={onClose}
                whileHover={{ y: -2, borderColor: '#2C2724' }}
                whileTap={{ scale: 0.97 }}
                transition={springSnappy}
                className="px-6 py-3 border border-[#D8CFC4] text-[#2C2724] text-[10px] uppercase tracking-[0.22em]"
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
