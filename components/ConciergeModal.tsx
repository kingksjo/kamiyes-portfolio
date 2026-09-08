'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLenis } from 'lenis/react';
import { X, Check, ArrowUpRight, Copy } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/data';
import { springSnappy } from '@/lib/motion';

interface ConciergeModalProps {
  onClose: () => void;
}

export function ConciergeModal({ onClose }: ConciergeModalProps) {
  const [copied, setCopied] = useState(false);
  const [inquirySubject, setInquirySubject] = useState('Machine Learning & AI Projects');
  const [clientMessage, setClientMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2600);
  };

  const handleSendMailto = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${PORTFOLIO_DATA.contact.email}?subject=${encodeURIComponent(
      `[Inquiry] ${inquirySubject}`
    )}&body=${encodeURIComponent(clientMessage || `Hi ${PORTFOLIO_DATA.shortName},\n\nI would like to discuss...`)}`
    window.location.href = mailto;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

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
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-[#FDFBF7] border border-[#D8CFC4] shadow-2xl z-10 flex flex-col"
      >
        
        {/* Header */}
        <div className="sticky top-0 z-20 bg-[#FDFBF7]/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-[#D8CFC4] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9A4D3E] font-medium">
              Contact
            </span>
            <span className="text-[#D8CFC4]">/</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#59534E]">
              Send a Message
            </span>
          </div>

          <motion.button
            onClick={onClose}
            id="close-concierge-btn"
            whileHover={{ color: '#2C2724', borderColor: '#2C2724' }}
            whileTap={{ scale: 0.94 }}
            transition={springSnappy}
            className="p-2 text-[#59534E] border border-[#D8CFC4]"
            aria-label="Close contact modal"
          >
            <X className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10 space-y-8">
          
          <div className="space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2724] font-normal">
              Get in Touch
            </h2>
            <p className="text-sm text-[#59534E] font-light leading-relaxed">
              {PORTFOLIO_DATA.name} is open to data science roles, applied machine learning projects, and conversations about building practical data-driven products.
            </p>
          </div>

          {/* Direct Email Card */}
          <div className="p-5 bg-[#F4F0EA] border border-[#D8CFC4] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#9A4D3E] font-medium">
                Direct Email
              </span>
              <p className="font-serif text-lg sm:text-xl text-[#2C2724] tracking-wide">
                {PORTFOLIO_DATA.contact.email}
              </p>
            </div>

            <motion.button
              onClick={handleCopyEmail}
              id="concierge-copy-email-btn"
              whileHover={{ y: -2, backgroundColor: '#9A4D3E' }}
              whileTap={{ scale: 0.97 }}
              transition={springSnappy}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#2C2724] text-[#FDFBF7] text-[10px] uppercase tracking-[0.2em]"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Email</span>
                </>
              )}
            </motion.button>
          </div>

          {/* Inquiry Form */}
          <form onSubmit={handleSendMailto} className="space-y-5 pt-2">
            <div className="space-y-2">
              <label
                htmlFor="inquiry-subject"
                className="block text-[10px] uppercase tracking-[0.2em] text-[#59534E]"
              >
                Subject
              </label>
              <select
                id="inquiry-subject"
                value={inquirySubject}
                onChange={(e) => setInquirySubject(e.target.value)}
                className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#D8CFC4] text-sm text-[#2C2724] focus:outline-none focus:border-[#9A4D3E]"
              >
                <option value="Machine Learning & AI Projects">Machine Learning & AI Projects</option>
                <option value="Data Science Roles & Opportunities">Data Science Roles & Opportunities</option>
                <option value="Predictive Modeling & Telemetry">Predictive Modeling & Telemetry</option>
                <option value="Recommender Systems & Search">Recommender Systems & Search</option>
                <option value="Spatial & Healthcare Analytics">Spatial & Healthcare Analytics</option>
                <option value="General Conversation / Collaboration">General Conversation / Collaboration</option>
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="inquiry-notes"
                className="block text-[10px] uppercase tracking-[0.2em] text-[#59534E]"
              >
                Message
              </label>
              <textarea
                id="inquiry-notes"
                rows={4}
                value={clientMessage}
                onChange={(e) => setClientMessage(e.target.value)}
                placeholder="Tell me about your project, team, or opportunity..."
                className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#D8CFC4] text-sm text-[#2C2724] placeholder-[#59534E]/50 focus:outline-none focus:border-[#9A4D3E] font-light leading-relaxed"
              />
            </div>

            <motion.button
              type="submit"
              id="submit-inquiry-btn"
              whileHover={{ y: -2, backgroundColor: '#833E31' }}
              whileTap={{ scale: 0.98 }}
              transition={springSnappy}
              className="w-full py-3.5 bg-[#9A4D3E] text-white text-[11px] uppercase tracking-[0.22em] flex items-center justify-center gap-2"
            >
              <span>Send Message</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.button>

            {submitted && (
              <p className="text-center text-xs text-[#9A4D3E] font-serif italic">
                Opening your email client...
              </p>
            )}
          </form>

          {/* Social Networks & Availability */}
          <div className="pt-6 border-t border-[#D8CFC4] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#59534E]">
            <div className="space-y-1">
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#9A4D3E] font-medium block">
                Availability
              </span>
              <p className="text-[#2C2724] leading-relaxed">{PORTFOLIO_DATA.contact.availability}</p>
            </div>

            <div className="space-y-1">
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#9A4D3E] font-medium block">
                Connect
              </span>
              <div className="flex items-center gap-4 pt-1">
                {PORTFOLIO_DATA.contact.socials.map((soc) => (
                  <motion.a
                    key={soc.name}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ color: '#9A4D3E' }}
                    transition={springSnappy}
                    className="text-[#2C2724] flex items-center gap-1 uppercase tracking-wider text-[10px]"
                  >
                    <span>{soc.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#9A4D3E]" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

        </div>

      </motion.div>
    </motion.div>
  );
}
