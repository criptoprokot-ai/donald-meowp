
export interface LinkItem {
  label: string;
  url: string;
}

export interface GiveawayEntry {
  wallet: string;
  timestamp: string;
  type: 'standard' | 'premium';
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  description: string;
}
