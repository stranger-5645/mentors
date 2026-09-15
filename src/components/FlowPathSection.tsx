import { BookOpen, TrendingUp, RefreshCw, Sparkles, ArrowRight } from 'lucide-react';

export default function FlowPathSection() {
  const steps = [
    {
      step: '01',
      title: 'LEARN',
      subtitle: 'Strategies',
      icon: BookOpen,
      color: 'bg-purple-50 text-purple-700 border-purple-200',
      badge: 'Course Syllabus',
    },
    {
      step: '02',
      title: 'TRADE',
      subtitle: 'Real execution',
      icon: TrendingUp,
      color: 'bg-blue-50 text-blue-700 border-blue-200',
      badge: 'Live Broker Orders',
    },
    {
      step: '03',
      title: 'JOURNAL',
      subtitle: 'Automated data',
      icon: RefreshCw,
      color: 'bg-teal-50 text-teal-700 border-teal-200',
      badge: 'Zero Manual Entry',
    },
    {
      step: '04',
      title: 'IMPROVE',
      subtitle: 'Insights & behaviour',
      icon: Sparkles,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      badge: 'Targeted Mentorship',
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative select-none">
      {/* Large Visual Statement */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
        <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-teal-700 uppercase mb-3 block">
          THE COMPLETE CYCLE
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
          From learning <span className="text-purple-600">→</span> to doing{' '}
          <span className="text-teal-600">→</span> to improving.
        </h2>
      </div>

      {/* 4-Step Visual Flow */}
      <div className="relative">
        {/* Desktop Blueprint Connected Line */}
        <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-[1.5px] -translate-y-1/2 bg-[#ded7ca] z-0 pointer-events-none" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white border border-[#ded8cb] hover:border-zinc-400 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
              >
                {/* Top Mini Tag & Step Counter */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] font-mono font-bold text-zinc-400">
                    PHASE {item.step}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#f4f1ea] border border-[#e4ded4] text-zinc-600">
                    {item.badge}
                  </span>
                </div>

                {/* Clean Pastel Icon */}
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 transition-transform group-hover:scale-105 duration-300 shadow-sm ${item.color}`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-base sm:text-lg font-black text-zinc-900 tracking-wide mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-zinc-500">
                  {item.subtitle}
                </p>

                {/* Arrow indicator on mobile/tablet */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center pt-4">
                    <ArrowRight className="w-4 h-4 text-zinc-400 rotate-90 sm:rotate-0" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
