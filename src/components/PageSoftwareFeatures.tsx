import {
  RefreshCw,
  BookOpen,
  LayoutDashboard,
  CalendarDays,
  BarChart2,
  PlayCircle,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';

interface PageSoftwareFeaturesProps {
  onWhatsAppClick: (customText?: string) => void;
  onNavigateToMentor: () => void;
}

export default function PageSoftwareFeatures({
  onWhatsAppClick,
  onNavigateToMentor,
}: PageSoftwareFeaturesProps) {
  const features = [
    {
      title: 'Auto Sync',
      subtitle: 'Broker → Journal',
      icon: RefreshCw,
      tag: 'MT4 • MT5 • cTrader',
      color: 'text-teal-700 bg-teal-50 border-teal-200',
    },
    {
      title: 'Journaling',
      subtitle: 'Every trade recorded',
      icon: BookOpen,
      tag: 'Zero Manual Entry',
      color: 'text-purple-700 bg-purple-50 border-purple-200',
    },
    {
      title: 'Overview',
      subtitle: 'Performance at a glance',
      icon: LayoutDashboard,
      tag: 'Live Balance & Equity',
      color: 'text-blue-700 bg-blue-50 border-blue-200',
    },
    {
      title: 'Calendar',
      subtitle: 'Trading history',
      icon: CalendarDays,
      tag: 'Consistency Audit',
      color: 'text-indigo-700 bg-indigo-50 border-indigo-200',
    },
    {
      title: 'Analytics',
      subtitle: 'Patterns & insights',
      icon: BarChart2,
      tag: 'Execution Leaks',
      color: 'text-purple-700 bg-purple-50 border-purple-200',
    },
    {
      title: 'Trade Replay',
      subtitle: 'Review every decision',
      icon: PlayCircle,
      tag: 'Bar-by-Bar Review',
      color: 'text-teal-700 bg-teal-50 border-teal-200',
    },
  ];

  return (
    <div className="relative min-h-screen bg-transparent text-zinc-900 selection:bg-purple-200 selection:text-purple-900">
      {/* Top Breadcrumb / Back Link */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        <button
          onClick={onNavigateToMentor}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#ded8cb] text-xs sm:text-sm font-semibold text-zinc-700 hover:text-zinc-950 hover:border-zinc-400 transition-all cursor-pointer shadow-sm"
        >
          <ArrowLeft className="w-4 h-4 text-purple-700" />
          <span>Back to Why Mentors</span>
        </button>
      </div>

      {/* Hero / Header */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-purple-700 uppercase mb-2 block">
          SOFTWARE FEATURES
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight leading-tight mb-3">
          Everything they need to improve.
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 font-normal">
          Built for trading mentors to give students a complete execution framework.
        </p>
      </section>

      {/* 6 Clean Feature Cards */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#ded8cb] hover:border-zinc-400 p-6 rounded-2xl flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.04)] group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shadow-sm ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold text-zinc-600 px-2.5 py-0.5 rounded-md bg-[#f4f1ea] border border-[#e4ded4]">
                      {item.tag}
                    </span>
                  </div>

                  <h2 className="text-lg font-extrabold text-zinc-900 mb-1 group-hover:text-purple-700 transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-500 font-medium">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-24 border-t border-[#ded8cb] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#ded8cb] rounded-2xl p-8 sm:p-14 shadow-[0_12px_40px_rgba(0,0,0,0.06)] text-center relative">
            <div className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase mb-4 block">
              designing the future — 2026
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 mb-4 tracking-tight">
              Give your mentorship a system.
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 mb-8 font-normal max-w-xl mx-auto">
              Connect with us to see how it works.
            </p>

            <div className="flex justify-center">
              <button
                onClick={() =>
                  onWhatsAppClick(
                    "Hello, I would like to learn more about the automated journaling software. Let's connect."
                  )
                }
                className="inline-flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-950 text-white font-bold px-8 py-4 rounded-full text-base shadow-sm transition-all transform hover:-translate-y-0.5 cursor-pointer border border-zinc-900 group"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Connect on WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
