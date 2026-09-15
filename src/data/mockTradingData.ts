import { StudentCohortMember, TradeRecord, FAQItem } from '../types';

export const mockCohortMembers: StudentCohortMember[] = [
  {
    id: 's-1',
    name: 'Alex Rivera',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    batch: 'Batch #14 — Advanced Price Action',
    winRate: 64,
    totalTrades: 38,
    profitFactor: 2.14,
    netPnL: '+$3,420.00',
    disciplineScore: 92,
    riskStatus: 'Safe',
    lastActive: '12m ago',
  },
  {
    id: 's-2',
    name: 'David Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    batch: 'Batch #14 — Advanced Price Action',
    winRate: 48,
    totalTrades: 52,
    profitFactor: 1.45,
    netPnL: '+$1,180.00',
    disciplineScore: 71,
    riskStatus: 'Warning',
    recentViolation: 'Exceeded 2% max daily risk rule',
    lastActive: '35m ago',
  },
  {
    id: 's-3',
    name: 'Sarah Jenkins',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    batch: 'Batch #13 — 1-on-1 Elite',
    winRate: 71,
    totalTrades: 29,
    profitFactor: 2.82,
    netPnL: '+$5,890.00',
    disciplineScore: 96,
    riskStatus: 'Safe',
    lastActive: '2h ago',
  },
  {
    id: 's-4',
    name: 'Marcus Vance',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    batch: 'Batch #15 — Intraday Breakout',
    winRate: 39,
    totalTrades: 64,
    profitFactor: 0.88,
    netPnL: '-$1,240.00',
    disciplineScore: 54,
    riskStatus: 'High Risk',
    recentViolation: 'Revenge trading detected (4 trades in 18 mins)',
    lastActive: 'Just now',
  },
];

export const mockTrades: TradeRecord[] = [
  {
    id: 't-101',
    studentName: 'Alex Rivera',
    symbol: 'NQ 100 E-mini',
    type: 'BUY',
    setup: 'Liquidity Sweep + Fair Value Gap',
    entryPrice: 19840.5,
    exitPrice: 19920.0,
    pnl: 795.0,
    rMultiple: '+2.8R',
    pnlPercent: 4.1,
    date: 'Today',
    time: '09:42 EST',
    checklistFollowed: true,
    emotionTag: 'Calm & Planned',
    mentorNote: 'Excellent patient entry after the 15m liquidity grab. Target reached smoothly.',
    mentorFeedbackStatus: 'Reviewed',
  },
  {
    id: 't-102',
    studentName: 'Marcus Vance',
    symbol: 'EUR/USD',
    type: 'SELL',
    setup: 'Break of Structure (Counter-trend)',
    entryPrice: 1.0842,
    exitPrice: 1.0874,
    pnl: -320.0,
    rMultiple: '-1.2R',
    pnlPercent: -1.6,
    date: 'Today',
    time: '11:15 EST',
    checklistFollowed: false,
    emotionTag: 'FOMO Entry',
    mentorNote: 'You took this right before high-impact CPI news without waiting for confirmation. Stick to the 4-point rule!',
    mentorFeedbackStatus: 'Reviewed',
  },
  {
    id: 't-103',
    studentName: 'David Chen',
    symbol: 'NIFTY 50 / ES',
    type: 'BUY',
    setup: 'Opening Range Breakout (ORB)',
    entryPrice: 5520.25,
    exitPrice: 5542.5,
    pnl: 445.0,
    rMultiple: '+1.9R',
    pnlPercent: 2.2,
    date: 'Yesterday',
    time: '14:20 EST',
    checklistFollowed: true,
    emotionTag: 'Cut Winner Early',
    mentorNote: 'Setup was textbook, but you closed 50% too early out of anxiety. Trail your stop loss as taught.',
    mentorFeedbackStatus: 'Reviewed',
  },
  {
    id: 't-104',
    studentName: 'Sarah Jenkins',
    symbol: 'BTC/USDT',
    type: 'BUY',
    setup: 'Daily Key Level Retest',
    entryPrice: 62400.0,
    exitPrice: 64150.0,
    pnl: 1250.0,
    rMultiple: '+3.4R',
    pnlPercent: 6.8,
    date: 'Yesterday',
    time: '18:05 EST',
    checklistFollowed: true,
    emotionTag: 'Calm & Planned',
    mentorNote: 'Great trade! Flawless execution and disciplined patience.',
    mentorFeedbackStatus: 'Reviewed',
  },
];

export const mentorPillars = [
  {
    title: 'Give a Complete Trading System',
    subtitle: 'Not Just Candlestick Patterns',
    description:
      'Anyone can teach support, resistance, or candlestick patterns in a lecture. But without disciplined trade tracking, risk parameters, and emotional journaling, 90% of students blow their accounts. This software equips your academy with an all-in-one execution system.',
    highlight: 'Complete Execution Framework',
  },
  {
    title: 'Stay Connected After Classes',
    subtitle: 'Retain Students for Months & Years',
    description:
      'Most trading courses end after 4 weeks and students immediately fall off. With automated journaling, your students continue logging daily trades, allowing you to provide ongoing guidance, host weekly review webinars, and build a lasting, high-retention community.',
    highlight: 'Zero Post-Class Drop-off',
  },
  {
    title: 'Supercharge 1-on-1 Mentorship',
    subtitle: 'Data-Driven Coaching In Real-Time',
    description:
      'Say goodbye to asking students for messy Excel spreadsheets or scattered screenshots. Open your mentor portal and instantly see their exact win rate, average risk:reward, psychology tags, and overtrading warnings before every 1-on-1 coaching call.',
    highlight: 'Instant Student Audit',
  },
];

export const journalingFeaturesList = [
  {
    title: 'Automated Broker & Platform Sync',
    description:
      'Zero manual spreadsheet logging. Automatically imports fills, executions, entry/exit prices, fees, and timestamps from MT4, MT5, TradingView, Zerodha, Dhan, Binance, Bybit, IBKR, and CSV.',
    badge: 'Zero Manual Work',
  },
  {
    title: 'Pre-Trade Checklist Enforcement',
    description:
      'Force your students to tick off your mentorship setup criteria (e.g. Higher Timeframe Trend, Risk <= 1%, Stop Loss Placed) before logging or taking a trade.',
    badge: 'Discipline Built-In',
  },
  {
    title: 'Emotional & Psychological Tagging',
    description:
      'Students tag emotional states (FOMO, Revenge trading, Hesitation, Boredom). Our system flags emotional leaks and shows mentors exactly where students lose money.',
    badge: 'Psychology Tracking',
  },
  {
    title: 'Mentor Oversight Dashboard',
    description:
      'A bird’s eye view of all active batches. Spot students in a losing streak or violating risk limits in real-time, so you can intervene before they blow their capital.',
    badge: 'Mentor Exclusive',
  },
  {
    title: '1-Click Trade Review & Audio Notes',
    description:
      'Inspect any student’s trade chart screenshot with entry/exit markers. Leave text feedback or voice notes directly on the trade card for personal 1-on-1 mentorship.',
    badge: 'Stronger 1-on-1s',
  },
  {
    title: 'Setup & Strategy Leak Detection',
    description:
      'Filter performance by the specific strategies you taught in class (e.g., "ORB Breakout", "Liquidity Grab", "Trend Pullback") to see which students master which strategy.',
    badge: 'Setup Analytics',
  },
];

export const faqItems: FAQItem[] = [
  {
    question: 'How do I add this trading journal to my existing class or mentorship academy?',
    answer:
      'It integrates seamlessly. You can invite your batch students via a private invite link or batch CSV. Once enrolled, students get their private journal dashboard branded with your guidelines, and you gain administrative access to review their trading metrics, trades, and discipline scores in real-time.',
  },
  {
    question: 'How does the WhatsApp connection work?',
    answer:
      'You can message us directly on WhatsApp for an immediate 1-on-1 walkthrough, pricing for your student cohort size, and custom onboarding setup. We provide dedicated WhatsApp support for mentors, and our software can also trigger automated WhatsApp summary alerts to students for daily logging reminders!',
  },
  {
    question: 'Can I monitor multiple students or batches simultaneously?',
    answer:
      'Yes! The Mentor Dashboard allows you to organize students by batch (e.g. "January 2025 Cohort", "1-on-1 Private Mentorship", "Forex Mastery"). You can view cohort-wide statistics or drill down into any individual student’s daily trades.',
  },
  {
    question: 'Which markets and brokers are supported?',
    answer:
      'The software supports all major markets: Forex, Crypto, US Equities & Futures (NQ, ES), and Indian Markets (NSE/BSE, Nifty, Bank Nifty). Automated import is compatible with MetaTrader 4/5, TradingView, Zerodha, Dhan, Binance, Bybit, Interactive Brokers, and generic CSV formats.',
  },
  {
    question: 'Does this replace what I teach in class?',
    answer:
      'Not at all — it complements and elevates your teachings. While you teach technical analysis, price action, and entry setups, the software enforces your risk management, psychology tracking, and daily accountability, giving your students a complete trading system.',
  },
  {
    question: 'Can I white-label this with my academy logo and rules?',
    answer:
      'Yes! Custom academy branding, bespoke pre-trade checklists matching your specific trading strategy rules, and custom mentor dashboards are available. Connect with us on WhatsApp to discuss white-label options.',
  },
];
