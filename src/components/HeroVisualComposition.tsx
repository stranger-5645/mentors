import { RefreshCw, Activity, BrainCircuit, LineChart, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

export default function HeroVisualComposition() {
  return (
    <div className="relative w-full max-w-[360px] sm:max-w-[460px] md:max-w-[540px] aspect-square flex items-center justify-center select-none py-4 sm:py-6">
      {/* Blueprint Compass Construction Rings matching reference */}
      <div className="absolute w-[92%] h-[92%] rounded-full border border-blue-400/20 pointer-events-none" />
      <div className="absolute w-[72%] h-[72%] rounded-full border border-dashed border-zinc-300 pointer-events-none" />
      <div className="absolute w-[50%] h-[50%] rounded-full border border-purple-400/20 pointer-events-none" />

      {/* SVG Connecting Vector Lines between Hub and Floating Cards */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
        <line x1="50%" y1="50%" x2="22%" y2="18%" stroke="#0ea5e9" strokeWidth="1.2" strokeDasharray="3 3" />
        <line x1="50%" y1="50%" x2="78%" y2="20%" stroke="#8b5cf6" strokeWidth="1.2" strokeDasharray="3 3" />
        <line x1="50%" y1="50%" x2="20%" y2="82%" stroke="#0ea5e9" strokeWidth="1.2" strokeDasharray="3 3" />
        <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#8b5cf6" strokeWidth="1.2" strokeDasharray="3 3" />
      </svg>

      {/* ============================================================ */}
      {/* 1. CENTRAL JOURNAL / SYSTEM CORE (CRISP WHITE PAPER CARD)    */}
      {/* ============================================================ */}
      <div className="relative z-20 w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-2xl bg-white border border-[#ded8cb] p-3 sm:p-5 shadow-[0_12px_36px_rgba(0,0,0,0.06)] flex flex-col items-center justify-between text-center group hover:scale-[1.02] transition-transform duration-300">
        <div className="relative z-10 flex items-center justify-between w-full">
          <span className="flex items-center gap-1 text-[9px] sm:text-[10px] font-mono font-semibold tracking-wider text-emerald-600 uppercase">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-ping" />
            LIVE CORE
          </span>
          <span className="text-[9px] sm:text-[10px] text-zinc-400 font-mono">v2.4</span>
        </div>

        <div className="relative z-10 flex flex-col items-center my-auto">
          <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-purple-50 border border-purple-200 text-purple-700 flex items-center justify-center shadow-sm mb-1.5 sm:mb-2">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
          </div>
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-900">
            Journal System
          </span>
          <span className="text-[9px] sm:text-[10px] text-zinc-500 mt-0.5">
            Automated Hub
          </span>
        </div>

        <div className="relative z-10 w-full pt-1.5 sm:pt-2 border-t border-[#f0ede6] flex items-center justify-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] font-medium text-purple-700">
          <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-500" />
          <span>Broker Connected</span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. FLOATING CARD 1: AUTO SYNC (TOP-LEFT)                     */}
      {/* ============================================================ */}
      <div className="absolute top-1 sm:top-6 left-0 z-30 bg-white border border-[#ded8cb] p-2.5 sm:p-3.5 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all transform hover:-translate-y-0.5 group">
        <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center">
            <RefreshCw className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover:rotate-180 transition-transform duration-700" />
          </div>
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-teal-700 font-mono">
            AUTO SYNC
          </span>
        </div>
        <div className="text-[11px] sm:text-sm font-bold text-zinc-900 flex items-center gap-1 sm:gap-1.5">
          <span>MT5</span>
          <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-teal-600" />
          <span className="text-teal-700 font-semibold">Journal</span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. FLOATING CARD 2: STUDENT DATA (TOP-RIGHT)                 */}
      {/* ============================================================ */}
      <div className="absolute top-2 sm:top-8 right-0 z-30 bg-white border border-[#ded8cb] p-2.5 sm:p-3.5 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all transform hover:-translate-y-0.5">
        <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-purple-50 border border-purple-200 text-purple-700 flex items-center justify-center">
            <Activity className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
          </div>
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-purple-700 font-mono">
            STUDENT DATA
          </span>
        </div>
        <div className="text-[11px] sm:text-sm font-bold text-zinc-900">
          Performance
        </div>
        <div className="text-[9px] sm:text-[10px] font-mono text-emerald-600 font-semibold mt-0.5">
          +72.5% Win Rate
        </div>
      </div>

      {/* ============================================================ */}
      {/* 4. FLOATING CARD 3: BEHAVIOUR (BOTTOM-LEFT)                  */}
      {/* ============================================================ */}
      <div className="absolute bottom-1 sm:bottom-6 left-0 z-30 bg-white border border-[#ded8cb] p-2.5 sm:p-3.5 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all transform hover:-translate-y-0.5 max-w-[140px] sm:max-w-none">
        <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 flex items-center justify-center">
            <BrainCircuit className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
          </div>
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-indigo-700 font-mono">
            BEHAVIOUR
          </span>
        </div>
        <div className="text-[10px] sm:text-xs font-semibold text-zinc-700 truncate sm:whitespace-normal">
          FOMO • Discipline
        </div>
      </div>

      {/* ============================================================ */}
      {/* 5. FLOATING CARD 4: INSIGHTS (BOTTOM-RIGHT)                  */}
      {/* ============================================================ */}
      <div className="absolute bottom-2 sm:bottom-8 right-0 z-30 bg-white border border-[#ded8cb] p-2.5 sm:p-3.5 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all transform hover:-translate-y-0.5">
        <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center">
            <LineChart className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
          </div>
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-teal-700 font-mono">
            INSIGHTS
          </span>
        </div>
        <div className="text-[11px] sm:text-sm font-bold text-zinc-900 flex items-center gap-1 sm:gap-1.5">
          <span>Track</span>
          <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-teal-600" />
          <span className="text-teal-700 font-semibold">Improve</span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 6. SIGNATURE "PAPER" COLLABORATIVE CURSOR PIN (From Screenshot) */}
      {/* ============================================================ */}
      <div className="absolute -top-3 right-1/4 z-40 flex items-start gap-1 pointer-events-none animate-bounce [animation-duration:4s]">
        <div className="w-3.5 h-3.5 rounded-full bg-blue-500 shadow-md shadow-blue-500/40 border-2 border-white ring-1 ring-blue-500/30 shrink-0 mt-1" />
        <div className="bg-white border border-[#ded8cb] rounded-lg px-2.5 py-1 shadow-md text-left">
          <span className="text-[10px] font-bold text-blue-600 block leading-tight">Trading Mentor</span>
          <span className="text-[9px] text-zinc-500 block leading-tight">live student audit</span>
        </div>
      </div>
    </div>
  );
}
