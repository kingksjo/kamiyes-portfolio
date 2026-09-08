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
      {/* Navigation */}
      <Navbar
        onOpenConcierge={() => setIsConciergeOpen(true)}
        onOpenIndex={() => setIsIndexOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onOpenConcierge={() => setIsConciergeOpen(true)}
      />

      {/* Projects Section */}
      <LookbookSection
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* Disciplines Section */}
      <EditorialDisciplines />

      {/* Footer */}
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
