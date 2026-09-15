interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  theme?: 'dark' | 'light';
}

export default function Logo({
  className = '',
  size = 'md',
  showTagline = true,
  theme = 'light',
}: LogoProps) {
  const iconSize = size === 'sm' ? 32 : size === 'lg' ? 48 : size === 'xl' ? 60 : 40;

  const textColor = theme === 'light' ? 'text-zinc-900' : 'text-white';
  const taglineColor = theme === 'light' ? 'text-zinc-500' : 'text-slate-400';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision Vector 3D-Style Metallic Monogram Mark */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_2px_8px_rgba(147,51,234,0.3)]"
        >
          <defs>
            {/* Main Purple Metallic Gradients */}
            <linearGradient id="tf-grad-main" x1="20" y1="20" x2="110" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#c084fc" />
              <stop offset="35%" stopColor="#9333ea" />
              <stop offset="70%" stopColor="#6b21a8" />
              <stop offset="100%" stopColor="#3b0764" />
            </linearGradient>

            <linearGradient id="tf-grad-facet" x1="60" y1="20" x2="90" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#d8b4fe" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#581c87" />
            </linearGradient>

            <linearGradient id="candle-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c084fc" />
              <stop offset="50%" stopColor="#9333ea" />
              <stop offset="100%" stopColor="#581c87" />
            </linearGradient>
          </defs>

          {/* 4 Ascending Candlesticks on the Left */}
          <line x1="16" y1="62" x2="16" y2="86" stroke="#9333ea" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="11.5" y="68" width="9" height="13" rx="1.5" fill="url(#candle-grad)" stroke="#c084fc" strokeWidth="0.8" />

          <line x1="26" y1="52" x2="26" y2="80" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="21.5" y="58" width="9" height="15" rx="1.5" fill="url(#candle-grad)" stroke="#c084fc" strokeWidth="0.8" />

          <line x1="36" y1="42" x2="36" y2="74" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="31.5" y="48" width="9" height="18" rx="1.5" fill="url(#candle-grad)" stroke="#d8b4fe" strokeWidth="0.8" />

          <line x1="46" y1="32" x2="46" y2="68" stroke="#c084fc" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="41.5" y="38" width="9" height="22" rx="1.5" fill="url(#candle-grad)" stroke="#e9d5ff" strokeWidth="0.8" />

          {/* Big Stylized 3D T & F Monogram */}
          <path
            d="M26 23 L106 17 L100 31 L58 35 L58 35 L33 34 Z"
            fill="url(#tf-grad-facet)"
            stroke="#c084fc"
            strokeWidth="0.8"
          />

          <path
            d="M52 33 L64 33 L64 94 L52 82 Z"
            fill="url(#tf-grad-main)"
            stroke="#9333ea"
            strokeWidth="0.8"
          />
          <path
            d="M64 33 L64 94 L58 100 L52 94 L52 33 Z"
            fill="url(#tf-grad-facet)"
          />

          <path
            d="M64 33 L98 30 L80 47 L64 47 Z"
            fill="url(#tf-grad-main)"
            stroke="#c084fc"
            strokeWidth="0.8"
          />

          <path
            d="M67 52 L98 52 L78 74 L67 63 Z"
            fill="url(#tf-grad-facet)"
            stroke="#d8b4fe"
            strokeWidth="0.8"
          />
          <path
            d="M74 55 L92 53 L78 69 Z"
            fill="#a855f7"
            opacity="0.85"
          />
        </svg>
      </div>

      {/* Typography representation */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline leading-none">
          <span className={`font-extrabold text-lg sm:text-xl tracking-tight ${textColor}`}>
            Trades
          </span>
          <span className="font-extrabold text-[#7c3aed] text-lg sm:text-xl tracking-tight">
            Fx
          </span>
          <span className={`font-bold text-lg sm:text-xl tracking-tight ${textColor}`}>
            Journal
          </span>
        </div>
        {showTagline && (
          <div className={`flex items-center gap-1.5 mt-1 text-[7px] sm:text-[8px] uppercase font-mono font-extrabold tracking-[0.2em] ${taglineColor}`}>
            <span>PLAN</span>
            <span className="text-purple-600 font-bold">|</span>
            <span>TRADE</span>
            <span className="text-purple-600 font-bold">|</span>
            <span>REFLECT</span>
            <span className="text-purple-600 font-bold">|</span>
            <span>GROW</span>
          </div>
        )}
      </div>
    </div>
  );
}
