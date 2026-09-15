export default function AtmosphericBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none -z-50 overflow-hidden bg-[#f4f1ea]"
      aria-hidden="true"
    >
      {/* 1. Base Drafting Grid Canvas (24px by 24px subtle grid squares matching Paper UI) */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ded8cc 1px, transparent 1px),
            linear-gradient(to bottom, #ded8cc 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      />

      {/* 2. Secondary 160px Major Grid Lines */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, #c9c1b2 1.5px, transparent 1.5px),
            linear-gradient(to bottom, #c9c1b2 1.5px, transparent 1.5px)
          `,
          backgroundSize: '160px 160px',
        }}
      />

      {/* 3. Architectural Blueprint Drafting Arcs & Geometry (matching top circles in screenshot) */}
      <svg className="absolute inset-0 w-full h-full opacity-35 pointer-events-none">
        {/* Top-center large compass circle */}
        <circle
          cx="50%"
          cy="0%"
          r="480"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
        <circle
          cx="50%"
          cy="0%"
          r="320"
          fill="none"
          stroke="#93c5fd"
          strokeWidth="1"
        />
        <circle
          cx="50%"
          cy="0%"
          r="160"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="1"
          strokeDasharray="2 2"
        />

        {/* Diagonal architectural construction line */}
        <line
          x1="10%"
          y1="0"
          x2="90%"
          y2="100%"
          stroke="#cbd5e1"
          strokeWidth="0.8"
          strokeDasharray="6 6"
        />
      </svg>

      {/* 4. Left Margin Architectural Ruler Millimeter Ticks */}
      <div className="hidden md:flex absolute top-0 bottom-0 left-3 w-8 flex-col justify-between py-6 opacity-35 select-none pointer-events-none">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="flex items-center gap-1">
            <div className={`h-[1px] bg-zinc-600 ${i % 4 === 0 ? 'w-4' : 'w-2'}`} />
            {i % 4 === 0 && (
              <span className="text-[9px] font-mono text-zinc-500">{i * 25}</span>
            )}
          </div>
        ))}
      </div>

      {/* 5. Subtle Paper Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 65%, rgba(220, 214, 202, 0.4) 100%)',
        }}
      />
    </div>
  );
}
