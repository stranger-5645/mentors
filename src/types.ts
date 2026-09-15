export interface StudentCohortMember {
  id: string;
  name: string;
  avatar: string;
  batch: string;
  winRate: number;
  totalTrades: number;
  profitFactor: number;
  netPnL: string;
  disciplineScore: number;
  riskStatus: 'Safe' | 'Warning' | 'High Risk';
  recentViolation?: string;
  lastActive: string;
}

export interface TradeRecord {
  id: string;
  studentName: string;
  symbol: string;
  type: 'BUY' | 'SELL';
  setup: string;
  entryPrice: number;
  exitPrice: number;
  pnl: number;
  rMultiple: string;
  pnlPercent: number;
  date: string;
  time: string;
  chartUrl?: string;
  checklistFollowed: boolean;
  emotionTag: 'Calm & Planned' | 'FOMO Entry' | 'Revenge Trade' | 'Cut Winner Early' | 'Held Loser';
  mentorNote?: string;
  mentorFeedbackStatus: 'Reviewed' | 'Pending Review';
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
