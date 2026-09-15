import { useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  RefreshCw,
  BookOpen,
  LayoutDashboard,
  CalendarDays,
  BarChart2,
  PlayCircle,
  ChevronDown,
  ChevronUp,
  Layers,
  Users,
  Compass,
  Building2,
  Activity,
  CandlestickChart,
  Brain,
  Database,
  Eye,
  LineChart,
  CheckCircle2,
} from 'lucide-react';
import HeroVisualComposition from './HeroVisualComposition';
import FlowPathSection from './FlowPathSection';
import { WhatsAppIcon, TelegramIcon } from './SocialIcons';

interface PageMentorLandingProps {
  onWhatsAppClick: (customText?: string) => void;
  onNavigateToFeatures: () => void;
  telegramUrl?: string;
}

export default function PageMentorLanding({
  onWhatsAppClick,
  onNavigateToFeatures,
  telegramUrl = "https://t.me/YOUR_USERNAME?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20automated%20journaling%20software.%20Let%27s%20connect.",
}: PageMentorLandingProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // 5 Mentor Benefits (Section 4)
  const benefits = [
    {
      num: '01',
      title: 'Complete System',
      line: 'Add journaling to your existing class.',
      icon: Layers,
      color: 'text-purple-700 border-purple-200 bg-purple-50',
    },
    {
      num: '02',
      title: 'Track Progress',
      line: 'See how students actually trade.',
      icon: Activity,
      color: 'text-blue-700 border-blue-200 bg-blue-50',
    },
    {
      num: '03',
      title: 'Stay Connected',
      line: 'Keep students engaged after the course.',
      icon: Users,
      color: 'text-indigo-700 border-indigo-200 bg-indigo-50',
    },
    {
      num: '04',
      title: 'Better 1:1s',
      line: 'Use real data for better mentorship.',
      icon: Compass,
      color: 'text-teal-700 border-teal-200 bg-teal-50',
    },
    {
      num: '05',
      title: 'IB + Rebranding',
      line: 'Extend your ecosystem under your brand.',
      icon: Building2,
      color: 'text-emerald-700 border-emerald-200 bg-emerald-50',
    },
  ];

  // 6 Software Features (Section 6)
  const features = [
    {
      title: 'Auto Sync',
      subtitle: 'Broker → Journal',
      icon: RefreshCw,
      tag: 'MT4 / MT5 / cTrader',
    },
    {
      title: 'Journaling',
      subtitle: 'Every trade recorded',
      icon: BookOpen,
      tag: 'Zero Manual Entry',
    },
    {
      title: 'Overview',
      subtitle: 'Performance at a glance',
      icon: LayoutDashboard,
      tag: 'Live Balance & P&L',
    },
    {
      title: 'Calendar',
      subtitle: 'Trading history',
      icon: CalendarDays,
      tag: 'Daily Consistency',
    },
    {
      title: 'Analytics',
      subtitle: 'Patterns & insights',
      icon: BarChart2,
      tag: 'Setup Win Rates',
    },
    {
      title: 'Trade Replay',
      subtitle: 'Review every decision',
      icon: PlayCircle,
      tag: 'Bar-by-Bar Review',
    },
  ];

  // Minimal FAQ (Section 7)
  const faqs = [
    {
      q: 'Who is this for?',
      a: 'Built specifically for trading mentors, forex educators, and academies looking to provide a structured tracking system.',
    },
    {
      q: 'Can I add it to my existing course?',
      a: 'Yes. It integrates seamlessly with your existing syllabus without changing your trading strategy.',
    },
    {
      q: 'Can I rebrand it for my academy?',
      a: 'Yes. Customize the platform with your academy logo, brand colors, and custom domain.',
    },
    {
      q: 'Can I track student performance?',
      a: 'Yes. Access real-time student dashboards to audit execution discipline, win rates, and risk management.',
    },
    {
      q: 'Can students continue after the course?',
      a: 'Yes. Students continue using the journal for months and years, maintaining active engagement with your community.',
    },
    {
      q: 'Does it support broker/platform sync?',
      a: 'Yes. Automatic execution sync across MT4, MT5, TradingView, cTrader, and CSV imports.',
    },
  ];

  return (
    <div className="relative min-h-screen bg-transparent text-zinc-900 font-sans selection:bg-purple-200 selection:text-purple-900">
      {/* ============================================================ */}
      {/* 1. HERO — SHORT + VISUAL (KEEP CONTENT & POSITION EXACT)      */}
      {/* ============================================================ */}
      <section className="pt-10 sm:pt-16 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Short, Bold Editorial Copy */}
          <div className="lg:col-span-6 text-left">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#ded8cb] text-purple-700 text-[11px] font-bold tracking-wider uppercase mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>BUILT FOR TRADING MENTORS</span>
            </div>

            {/* Short Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.12] text-zinc-900 mb-5">
              Automated Journaling.
              <br />
              <span className="text-purple-700">
                Stronger Mentorship.
              </span>
            </h1>

            {/* One Short Supporting Line */}
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-xl mb-8 font-normal">
              Give your students a complete trading system — beyond strategies and charts.
            </p>

            {/* Contact Actions: WhatsApp & Telegram */}
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                id="hero-whatsapp-btn"
                onClick={() =>
                  onWhatsAppClick(
                    "Hello, I would like to learn more about the automated journaling software. Let's connect."
                  )
                }
                className="inline-flex items-center gap-2.5 bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-950 text-white font-bold px-7 py-3.5 rounded-full text-sm sm:text-base shadow-sm transition-all transform hover:-translate-y-0.5 cursor-pointer border border-zinc-900 group"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Connect on WhatsApp</span>
                <ArrowRight className="w-4 h-4 ml-0.5 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                id="hero-telegram-btn"
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-white hover:bg-zinc-50 active:bg-zinc-100 text-zinc-900 font-bold px-7 py-3.5 rounded-full text-sm sm:text-base shadow-xs border border-[#ded8cb] hover:border-zinc-400 transition-all transform hover:-translate-y-0.5 cursor-pointer group"
              >
                <TelegramIcon className="w-5 h-5 shrink-0" />
                <span>Connect on Telegram</span>
                <ArrowRight className="w-4 h-4 ml-0.5 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Creative Visual Composition with Floating Cards */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <HeroVisualComposition />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. WHY MENTORS — MORE THAN A TRADING CLASS HIERARCHY         */}
      {/* ============================================================ */}
      <section id="why-mentors" className="py-16 sm:py-24 border-t border-[#ded8cb] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header: Label + Heading + Short Line */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-purple-700 uppercase mb-2 block">
              WHY MENTORS
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-zinc-900 tracking-tight mb-3">
              More than a trading class.
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 font-normal">
              Turn your existing course into a complete trading system.
            </p>
          </div>

          {/* 3-Column Visual Hierarchy with Connectors */}
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 lg:gap-6">
            {/* COLUMN 1: YOUR CLASS */}
            <div className="flex-1 flex flex-col items-center">
              <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-zinc-800 uppercase mb-3">
                YOUR CLASS
              </span>

              {/* Box 1 */}
              <div className="w-full bg-white border border-[#ded8cb] rounded-2xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.04)] relative flex flex-col justify-center min-h-[200px] text-center group hover:border-zinc-400 transition-colors">
                {/* Architectural corner tick marks */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-zinc-300" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-zinc-300" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-zinc-300" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-zinc-300" />

                <div className="space-y-3 font-semibold text-zinc-800 text-sm sm:text-base flex flex-col items-center">
                  <div className="flex items-center gap-2 tracking-wide">
                    <BookOpen className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                    <span>Strategies</span>
                  </div>
                  <div className="flex items-center gap-2 tracking-wide">
                    <CandlestickChart className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                    <span>Charts</span>
                  </div>
                  <div className="flex items-center gap-2 tracking-wide">
                    <Brain className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                    <span>Psychology</span>
                  </div>
                </div>
              </div>

              {/* Bottom Label: DIFFERENTIATED */}
              <div className="mt-4">
                <span className="inline-block text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-purple-700 uppercase bg-purple-50 border border-purple-200 px-3.5 py-1 rounded-full shadow-xs">
                  DIFFERENTIATED
                </span>
              </div>
            </div>

            {/* PLUS CONNECTOR (+) */}
            <div className="flex items-center justify-center py-2 md:py-0 shrink-0">
              <div className="w-9 h-9 rounded-full bg-white border border-[#ded8cb] text-zinc-500 font-mono font-bold text-lg flex items-center justify-center shadow-xs">
                +
              </div>
            </div>

            {/* COLUMN 2: JOURNAL SOFTWARE */}
            <div className="flex-1 flex flex-col items-center">
              <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-zinc-800 uppercase mb-3">
                JOURNAL SOFTWARE
              </span>

              {/* Box 2 */}
              <div className="w-full bg-white border border-[#ded8cb] rounded-2xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.04)] relative flex flex-col justify-center min-h-[200px] text-center group hover:border-zinc-400 transition-colors">
                {/* Architectural corner tick marks */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-teal-400/60" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-teal-400/60" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-teal-400/60" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-teal-400/60" />

                <div className="space-y-2.5 font-semibold text-zinc-800 text-sm sm:text-base flex flex-col items-center">
                  <div className="flex items-center gap-2 tracking-wide">
                    <Database className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>Trade Data</span>
                  </div>
                  <div className="flex items-center gap-2 tracking-wide">
                    <Activity className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>Behaviour</span>
                  </div>
                  <div className="flex items-center gap-2 tracking-wide">
                    <Eye className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>Insights</span>
                  </div>
                  <div className="flex items-center gap-2 tracking-wide">
                    <LineChart className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>Analytics</span>
                  </div>
                </div>
              </div>

              {/* Bottom Label: MORE VALUE */}
              <div className="mt-4">
                <span className="inline-block text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-teal-700 uppercase bg-teal-50 border border-teal-200 px-3.5 py-1 rounded-full shadow-xs">
                  MORE VALUE
                </span>
              </div>
            </div>

            {/* ARROW CONNECTOR (→) */}
            <div className="flex items-center justify-center py-2 md:py-0 shrink-0">
              <div className="w-9 h-9 rounded-full bg-white border border-[#ded8cb] text-purple-700 font-mono font-bold text-base flex items-center justify-center shadow-xs">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* COLUMN 3: YOUR CLASS, EVOLVED */}
            <div className="flex-1 flex flex-col items-center">
              <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-purple-700 uppercase mb-3">
                YOUR CLASS, EVOLVED
              </span>

              {/* Box 3 */}
              <div className="w-full bg-white border-2 border-purple-200/80 rounded-2xl p-6 sm:p-7 shadow-[0_6px_24px_rgba(147,51,234,0.08)] relative flex flex-col justify-center min-h-[200px] text-center group hover:border-purple-300 transition-colors">
                {/* Architectural corner tick marks */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-purple-500" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-purple-500" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-purple-500" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-purple-500" />

                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2 font-extrabold text-zinc-900 text-base sm:text-lg tracking-tight text-purple-700">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>Complete System</span>
                  </div>
                  <div className="h-[1px] w-16 mx-auto bg-[#e4ded4]" />
                  <div className="space-y-1.5 text-xs sm:text-sm font-semibold text-zinc-700">
                    <div>Learn <span className="text-purple-600 font-bold">→</span> Trade</div>
                    <div>Track <span className="text-teal-600 font-bold">→</span> Improve</div>
                  </div>
                </div>
              </div>

              {/* Bottom Label: STRONGER POSITIONING */}
              <div className="mt-4">
                <span className="inline-block text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-zinc-900 uppercase bg-[#f4f1ea] border border-[#ded8cb] px-3.5 py-1 rounded-full shadow-xs">
                  STRONGER POSITIONING
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. FIVE MENTOR BENEFITS — COMPACT EDITORIAL LAYOUT           */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 border-t border-[#ded8cb] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-teal-700 uppercase mb-2 block">
              BENEFITS
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-zinc-900 tracking-tight">
              Why mentors use it
            </h2>
          </div>

          {/* 5 Compact Visual Points: Number + Icon + Title + Max 1 Short Sentence */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#ded8cb] hover:border-purple-300 p-5 rounded-2xl flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-[0_4px_16px_rgba(0,0,0,0.04)] group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-purple-700">
                        {b.num}
                      </span>
                      <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${b.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-sm font-extrabold text-zinc-900 mb-2 group-hover:text-purple-700 transition-colors">
                      {b.title}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-500 font-normal leading-snug">
                    {b.line}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. CREATIVE VISUAL SECTION: FROM LEARNING → DOING → IMPROVING*/}
      {/* ============================================================ */}
      <FlowPathSection />

      {/* ============================================================ */}
      {/* 6. SOFTWARE FEATURES — COMPACT CARDS (NO LONG DESCRIPTIONS)  */}
      {/* ============================================================ */}
      <section id="features" className="py-16 sm:py-24 border-t border-[#ded8cb] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-purple-700 uppercase mb-2 block">
                CORE SUITE
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-zinc-900 tracking-tight">
                Everything they need to improve.
              </h2>
            </div>
            <button
              onClick={onNavigateToFeatures}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-zinc-900 hover:text-purple-700 transition-colors cursor-pointer"
            >
              <span>View full software details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 6 Compact Cards with Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#ded8cb] hover:border-zinc-400 p-5 rounded-2xl flex items-center justify-between gap-4 transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(0,0,0,0.04)] group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 group-hover:border-teal-300 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-zinc-900 mb-0.5">
                        {feat.title}
                      </h3>
                      <p className="text-xs text-zinc-500">
                        {feat.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-zinc-600 px-2.5 py-0.5 rounded-md bg-[#f4f1ea] border border-[#e4ded4] shrink-0">
                    {feat.tag}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. FAQ — MINIMAL ACCORDION (NO LARGE PARAGRAPHS)             */}
      {/* ============================================================ */}
      <section id="faq" className="py-16 sm:py-24 border-t border-[#ded8cb] relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-purple-700 uppercase mb-2 block">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-zinc-900 tracking-tight">
              Questions, answered.
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#ded8cb] rounded-2xl overflow-hidden transition-colors hover:border-zinc-400 shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-semibold text-sm sm:text-base text-zinc-900 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <div className="w-6 h-6 rounded-lg bg-[#f4f1ea] border border-[#ded8cb] flex items-center justify-center text-zinc-600 shrink-0 ml-3">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-purple-700" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-[#f4f1ea]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. FINAL CTA — PAPER EDITORIAL CARD (MATCHING SCREENSHOT)   */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 border-t border-[#ded8cb] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered White Paper Sheet (like in screenshot) */}
          <div className="bg-white border border-[#ded8cb] rounded-2xl p-8 sm:p-14 shadow-[0_12px_40px_rgba(0,0,0,0.06)] text-center relative">
            {/* Subtle Drafting Blueprint Mark */}
            <div className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase mb-4 block">
              designing the future — 2026
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 mb-4 tracking-tight">
              Give your mentorship a system.
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 mb-8 font-normal max-w-xl mx-auto">
              Connect with us to see how it works.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <button
                id="final-whatsapp-btn"
                onClick={() =>
                  onWhatsAppClick(
                    "Hello, I would like to learn more about the automated journaling software. Let's connect."
                  )
                }
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-950 text-white font-bold px-8 py-4 rounded-full text-base shadow-sm transition-all transform hover:-translate-y-0.5 cursor-pointer border border-zinc-900 group"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Connect on WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                id="final-telegram-btn"
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-zinc-50 active:bg-zinc-100 text-zinc-900 font-bold px-8 py-4 rounded-full text-base shadow-xs border border-[#ded8cb] hover:border-zinc-400 transition-all transform hover:-translate-y-0.5 cursor-pointer group"
              >
                <TelegramIcon className="w-5 h-5 shrink-0" />
                <span>Connect on Telegram</span>
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
