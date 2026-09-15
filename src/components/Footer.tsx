import Logo from './Logo';

interface FooterProps {
  onNavigate: (page: 'mentor' | 'features') => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#f4f1ea]/90 backdrop-blur-md border-t border-[#ded8cb] py-10 text-xs text-zinc-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[#ded8cb]">
          <Logo size="md" theme="light" />

          <div className="flex items-center gap-6 font-semibold text-zinc-700">
            <button
              onClick={() => {
                onNavigate('mentor');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-purple-700 transition-colors py-1 cursor-pointer"
            >
              Why Mentors
            </button>
            <button
              onClick={() => {
                onNavigate('features');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-purple-700 transition-colors py-1 cursor-pointer"
            >
              Software Features
            </button>
            <a href="#faq" className="hover:text-purple-700 transition-colors py-1 cursor-pointer">
              Mentor FAQ
            </a>
          </div>

          <div className="text-right">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-emerald-700 text-[11px] font-semibold border border-[#ded8cb] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Direct Mentor Inquiries Open
            </span>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-400">
          <p>© {new Date().getFullYear()} TradesFxJournal. PLAN | TRADE | REFLECT | GROW.</p>
          <p>Automated trading journaling software designed specifically for trading mentors and academies.</p>
        </div>
      </div>
    </footer>
  );
}
