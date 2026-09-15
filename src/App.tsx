/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import PageMentorLanding from './components/PageMentorLanding';
import PageSoftwareFeatures from './components/PageSoftwareFeatures';
import Footer from './components/Footer';
import AtmosphericBackground from './components/AtmosphericBackground';
import { MessageCircle, ExternalLink } from 'lucide-react';
import { logMentorInquiry } from './lib/firebase';
import MentorInquiryModal from './components/MentorInquiryModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'mentor' | 'features'>('mentor');
  const [toastData, setToastData] = useState<{ message: string; url: string } | null>(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  // Configure your WhatsApp number here or via the VITE_WHATSAPP_NUMBER environment variable
  const rawNumber = (import.meta.env.VITE_WHATSAPP_NUMBER as string) || '15550192834';
  const cleanNumber = rawNumber.replace(/[^0-9]/g, '');

  const handleWhatsAppClick = (customText?: string) => {
    const defaultText =
      "Hello! I am a trading mentor and I'd like to learn more about the automated trading journaling software for my students.";
    const textToSend = customText || defaultText;
    const encoded = encodeURIComponent(textToSend);
    const waUrl = `https://wa.me/${cleanNumber}?text=${encoded}`;

    // Record inquiry event in Firebase Firestore
    logMentorInquiry({
      whatsappNumber: cleanNumber,
      notes: textToSend,
      source: currentPage,
    }).catch((err) => console.warn('Firestore logging error:', err));

    setToastData({ message: "Opening WhatsApp chat...", url: waUrl });
    setTimeout(() => setToastData(null), 5000);

    // Direct browser redirect via programmatic anchor click (bypasses iframe popup blockers)
    try {
      const link = document.createElement('a');
      link.href = waUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleNavigate = (page: 'mentor' | 'features') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen text-zinc-900 font-sans antialiased selection:bg-purple-200 selection:text-purple-900 flex flex-col justify-between overflow-x-hidden">
      {/* Global Architectural Paper Grid Canvas & Drafting Arcs */}
      <AtmosphericBackground />

      {/* Toast Notification with Direct Clickable Link fallback */}
      {toastData && (
        <a
          href={toastData.url}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed top-20 right-4 sm:right-6 z-50 bg-white hover:bg-zinc-50 text-zinc-900 px-4 py-2.5 rounded-xl font-semibold text-xs shadow-lg flex items-center gap-2.5 border border-[#ded8cb] transition-all cursor-pointer animate-in fade-in slide-in-from-top-3 group"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366] shrink-0" />
          <span>{toastData.message}</span>
          <span className="text-purple-700 underline text-[11px] font-bold group-hover:text-purple-800">
            Open Chat
          </span>
          <ExternalLink className="w-3.5 h-3.5 shrink-0 text-zinc-400 group-hover:text-zinc-600" />
        </a>
      )}

      {/* Navbar with exact logo & 2-page switcher */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onWhatsAppClick={handleWhatsAppClick}
      />

      {/* Main Content: Page 1 (Mentor Landing) or Page 2 (Software Features) */}
      <main className="flex-1 pb-16 sm:pb-0">
        {currentPage === 'mentor' ? (
          <PageMentorLanding
            onWhatsAppClick={handleWhatsAppClick}
            onNavigateToFeatures={() => handleNavigate('features')}
            onOpenInquiryModal={() => setIsInquiryModalOpen(true)}
          />
        ) : (
          <PageSoftwareFeatures
            onWhatsAppClick={handleWhatsAppClick}
            onNavigateToMentor={() => handleNavigate('mentor')}
          />
        )}
      </main>

      {/* Firebase Firestore Lead Capture Modal */}
      <MentorInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        onWhatsAppRedirect={handleWhatsAppClick}
      />

      {/* Clean Minimal Paper Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Sticky Quick Switcher for Handheld Devices */}
      <div className="sm:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-40 bg-white/95 backdrop-blur-md border border-[#ded8cb] shadow-lg rounded-full px-2 py-1.5 flex items-center gap-1">
        <button
          onClick={() => handleNavigate('mentor')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
            currentPage === 'mentor'
              ? 'bg-zinc-900 text-white shadow-sm'
              : 'text-zinc-600 hover:text-zinc-900'
          }`}
        >
          Why Mentors
        </button>
        <button
          onClick={() => handleNavigate('features')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
            currentPage === 'features'
              ? 'bg-zinc-900 text-white shadow-sm'
              : 'text-zinc-600 hover:text-zinc-900'
          }`}
        >
          Software Features
        </button>
      </div>
    </div>
  );
}
