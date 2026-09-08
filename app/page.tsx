'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { LookbookSection } from '@/components/LookbookSection';
import { EditorialDisciplines } from '@/components/EditorialDisciplines';
import { Footer } from '@/components/Footer';
import { ProjectDossierModal } from '@/components/ProjectDossierModal';
import { ConciergeModal } from '@/components/ConciergeModal';
import { IndexModal } from '@/components/IndexModal';
import { Project } from '@/lib/data';

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [isIndexOpen, setIsIndexOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#2C2724] relative selection:bg-[#9A4D3E]/20">
      {/* Top Subtle Atelier Ribbon */}
      <div className="w-full bg-[#F4F0EA] border-b border-[#D8CFC4] py-1.5 px-4 text-center">
        <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#59534E]">
          Sartorial Intelligence • Edition 2024–2026 • Curated Machine Learning Architecture
        </p>
      </div>

      {/* Navigation */}
      <Navbar
        onOpenConcierge={() => setIsConciergeOpen(true)}
        onOpenIndex={() => setIsIndexOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onOpenConcierge={() => setIsConciergeOpen(true)}
      />

      {/* Lookbook Gallery */}
      <LookbookSection
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* Editorial Disciplines & Principles */}
      <EditorialDisciplines />

      {/* Massive Solid Terracotta Footer */}
      <Footer
        onOpenConcierge={() => setIsConciergeOpen(true)}
      />

      {/* Interactive Modals */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDossierModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onOpenConcierge={() => setIsConciergeOpen(true)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isConciergeOpen && (
          <ConciergeModal onClose={() => setIsConciergeOpen(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isIndexOpen && (
          <IndexModal
            onClose={() => setIsIndexOpen(false)}
            onSelectProject={(project) => setSelectedProject(project)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
