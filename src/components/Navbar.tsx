import Logo from './Logo';
import { MessageCircle, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentPage: 'mentor' | 'features';
  onNavigate: (page: 'mentor' | 'features') => void;
  onWhatsAppClick: (customText?: string) => void;
}

export default function Navbar({
  currentPage,
  onNavigate,
  onWhatsAppClick,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 bg-[#f4f1ea]/85 backdrop-blur-md border-b border-[#ded8cb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo on left */}
        <button
          onClick={() => onNavigate('mentor')}
          className="text-left focus:outline-none transition-opacity hover:opacity-85 cursor-pointer"
        >
          <Logo size="md" theme="light" />
        </button>

        {/* Right Nav Links + Action */}
        <div className="flex items-center gap-2.5 sm:gap-6 md:gap-8">
          <button
            onClick={() => onNavigate('mentor')}
            className={`hidden sm:inline-block text-xs sm:text-sm transition-colors cursor-pointer ${
              currentPage === 'mentor'
                ? 'text-zinc-950 font-bold underline decoration-2 underline-offset-8 decoration-purple-600'
                : 'text-zinc-600 hover:text-zinc-950 font-medium'
            }`}
          >
            Why Mentors
          </button>

          <button
            onClick={() => onNavigate('features')}
            className={`hidden sm:inline-block text-xs sm:text-sm transition-colors cursor-pointer ${
              currentPage === 'features'
                ? 'text-zinc-950 font-bold underline decoration-2 underline-offset-8 decoration-purple-600'
                : 'text-zinc-600 hover:text-zinc-950 font-medium'
            }`}
          >
            Features
          </button>

          <button
            onClick={() =>
              onWhatsAppClick(
                'Hi! I am a trading mentor and would like to learn more about the automated trading journaling system.'
              )
            }
            className="group flex items-center gap-1.5 sm:gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-sm transition-all cursor-pointer border border-zinc-900 whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366] shrink-0" />
            <span><span className="hidden xs:inline">Connect on </span>WhatsApp</span>
            <ArrowRight className="w-3 h-3 text-zinc-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
          </button>
        </div>
      </div>
    </header>
  );
}

