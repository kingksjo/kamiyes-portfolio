'use client';

import React, { useState } from 'react';
import { motion, type Variants } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '@/lib/data';
import { Reveal } from '@/components/Reveal';
import { springSnappy } from '@/lib/motion';

interface LookbookSectionProps {
  onSelectProject: (project: Project) => void;
}

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
  hover: { y: -6, transition: springSnappy },
};

const frameVariants: Variants = {
  hidden: { borderColor: 'rgba(216,207,196,0.8)' },
  visible: { borderColor: 'rgba(216,207,196,0.8)' },
  hover: { borderColor: 'rgba(154,77,62,0.8)', transition: springSnappy },
};

const titleVariants: Variants = {
  hidden: { color: '#2C2724' },
  visible: { color: '#2C2724' },
  hover: { color: '#9A4D3E', transition: springSnappy },
};

const arrowVariants: Variants = {
  hidden: { x: 0, y: 0, color: '#D8CFC4' },
  visible: { x: 0, y: 0, color: '#D8CFC4' },
  hover: { x: 3, y: -3, color: '#9A4D3E', transition: springSnappy },
};

const pillVariants: Variants = {
  active: { backgroundColor: '#2C2724', color: '#FDFBF7' },
  inactive: { backgroundColor: '#F4F0EA', color: '#59534E' },
};

function LookbookCard({ project, onSelect }: { project: Project; onSelect: (project: Project) => void }) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover="hover"
      onClick={() => onSelect(project)}
      id={`project-card-${project.id}`}
      className="flex flex-col cursor-pointer"
    >
      <motion.div
        variants={frameVariants}
        className="flex flex-col flex-grow border border-[#D8CFC4]/80 bg-[#F4F0EA]/40 p-6 sm:p-8 space-y-3"
      >
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em]">
          <span className="text-[#9A4D3E] font-medium">{project.lookbookNumber}</span>
          <span className="text-[#59534E]">{project.year}</span>
        </div>

        <div className="pt-4 flex flex-col flex-grow space-y-3">

        {/* Subtle Subtitle / Category */}
        <div className="text-[10px] uppercase tracking-[0.22em] text-[#9A4D3E] font-medium">
          {project.subtitle}
        </div>

        {/* Refined Serif Project Title */}
        <h3 className="font-serif text-2xl sm:text-3xl tracking-tight flex items-center justify-between">
          <motion.span variants={titleVariants} className="text-[#2C2724]">
            {project.name}
          </motion.span>
          <motion.span variants={arrowVariants} className="inline-flex">
            <ArrowUpRight className="w-4 h-4" />
          </motion.span>
        </h3>

        {/* Sans-serif Description */}
        <p className="text-sm text-[#59534E] font-light leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tags without code cliches */}
        <div className="pt-2 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 bg-[#F4F0EA] text-[#59534E] border border-[#D8CFC4]/50"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Key Metric Preview */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="pt-3 border-t border-[#D8CFC4]/50 flex items-center justify-between text-[11px] text-[#59534E]">
            <span className="uppercase tracking-wider text-[9px] text-[#59534E]/80">Primary Result</span>
            <span className="font-serif italic text-sm text-[#2C2724] font-medium">
              {project.metrics[0].value} {project.metrics[0].label}
            </span>
          </div>
        )}
        </div>
      </motion.div>
    </motion.article>
  );
}

export function LookbookSection({ onSelectProject }: LookbookSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'gallery' | 'editorial'>('gallery');

  const filteredProjects = activeFilter === 'All'
    ? PORTFOLIO_DATA.selectedProjects
    : PORTFOLIO_DATA.selectedProjects.filter(p => p.disciplines.includes(activeFilter));

  return (
    <section id="projects" className="w-full py-24 sm:py-32 lg:py-44 border-b border-[#D8CFC4]">
      {/* Anchor alias for backward compatibility */}
      <div id="lookbook" className="hidden" />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* Section Header: Projects Masthead */}
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between pb-12 sm:pb-16 border-b border-[#D8CFC4]/70 gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="block text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#9A4D3E] font-medium">
              {PORTFOLIO_DATA.projectsSection.eyebrow}
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2C2724] font-normal tracking-[-0.01em]">
              {PORTFOLIO_DATA.projectsSection.title}
            </h2>

            <p className="text-sm sm:text-base text-[#59534E] font-light leading-relaxed">
              {PORTFOLIO_DATA.projectsSection.intro}
            </p>
          </div>

          {/* Controls: Filter Pills & View Toggle */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {PORTFOLIO_DATA.projectsSection.filters.map((tag) => (
                <motion.button
                  key={tag}
                  onClick={() => setActiveFilter(tag)}
                  animate={activeFilter === tag ? 'active' : 'inactive'}
                  variants={pillVariants}
                  transition={springSnappy}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] ${
                    activeFilter === tag
                      ? ''
                      : 'border border-[#D8CFC4]/50'
                  }`}
                >
                  {tag}
                </motion.button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center border border-[#D8CFC4] p-0.5 bg-[#F4F0EA]">
              <motion.button
                onClick={() => setViewMode('gallery')}
                animate={viewMode === 'gallery' ? 'active' : 'inactive'}
                variants={pillVariants}
                transition={springSnappy}
                className="px-3 py-1 text-[9px] uppercase tracking-[0.2em]"
                title="Grid View"
              >
                Grid
              </motion.button>
              <motion.button
                onClick={() => setViewMode('editorial')}
                animate={viewMode === 'editorial' ? 'active' : 'inactive'}
                variants={pillVariants}
                transition={springSnappy}
                className="px-3 py-1 text-[9px] uppercase tracking-[0.2em]"
                title="List View"
              >
                List
              </motion.button>
            </div>
          </div>
        </Reveal>

        {/* Gallery View: Large Vertical Lookbook Plates */}
        {viewMode === 'gallery' ? (
          <motion.div
            key={`gallery-${activeFilter}`}
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-14 pt-16 sm:pt-20"
          >
            {filteredProjects.map((project) => (
              <LookbookCard key={project.id} project={project} onSelect={onSelectProject} />
            ))}
          </motion.div>
        ) : (
          /* Editorial Index / List View */
          <div className="divide-y divide-[#D8CFC4]/70 pt-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                onClick={() => onSelectProject(project)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ backgroundColor: 'rgba(244,240,234,0.4)' }}
                transition={springSnappy}
                className="py-10 sm:py-12 cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center px-4"
              >
                <div className="lg:col-span-2 flex items-center gap-3">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#9A4D3E] font-medium">
                    {project.lookbookNumber}
                  </span>
                  <span className="text-[#D8CFC4]">—</span>
                  <span className="text-[11px] uppercase tracking-widest text-[#59534E]">
                    {project.year}
                  </span>
                </div>

                <div className="lg:col-span-4">
                  <motion.h3
                    whileHover={{ color: '#9A4D3E' }}
                    transition={springSnappy}
                    className="font-serif text-2xl sm:text-3xl text-[#2C2724]"
                  >
                    {project.name}
                  </motion.h3>
                  <p className="text-[11px] uppercase tracking-widest text-[#59534E] mt-1">
                    {project.subtitle}
                  </p>
                </div>

                <div className="lg:col-span-4">
                  <p className="text-sm text-[#59534E] font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="lg:col-span-2 flex items-center justify-end gap-3">
                  <motion.span
                    whileHover={{ color: '#9A4D3E' }}
                    transition={springSnappy}
                    className="text-[10px] uppercase tracking-[0.2em] text-[#2C2724]"
                  >
                    View Project
                  </motion.span>
                  <motion.span
                    whileHover={{ x: 4, y: -4 }}
                    transition={springSnappy}
                    className="inline-flex"
                  >
                    <ArrowUpRight className="w-4 h-4 text-[#9A4D3E]" />
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Section Colophon Note */}
        <Reveal className="mt-20 pt-10 border-t border-[#D8CFC4]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[10px] uppercase tracking-[0.22em] text-[#59534E]">
          <span>Documented Case Studies</span>
          <span>Open to collaboration on applied machine learning projects</span>
        </Reveal>

      </div>
    </section>
  );
}
