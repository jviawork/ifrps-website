export type TickerItem = {
  id: string;
  label: string;
  text: string;
  href?: string;
};

export type RankingEntry = {
  rank: number;
  player: string;
  slug: string;
  country: string;
  elo: number;
  movement: number;
  organization: string;
  qualified: boolean;
};

export type Tournament = {
  id: string;
  name: string;
  organization: string;
  date: string;
  location: string;
  format: string;
  level: "Recognized" | "Sanctioned" | "Major";
  status: "Upcoming" | "Completed";
  winner?: string;
};

export type NewsItem = {
  id: string;
  category: string;
  organization: string;
  title: string;
  summary: string;
  date: string;
};

export type Organization = {
  id: string;
  name: string;
  region: string;
  status: "Recognized" | "Sanctioned";
  description: string;
};
