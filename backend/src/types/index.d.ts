export type Sport = {
  id: string;
  name: string;
  competitions: Competition[];
};

export type Competition = {
  id: string;
  name: string;
  matches: MatchInfo[];
};

export type MatchInfo = {
  id: string;
  home: string;
  away: string;
  status: string;
  date: Date;
  odds?: Odd[];
  categories?: OddCategory[];
  currentTime?: unknown;
  score?: {
    home: string;
    away: string;
    info?: string;
  };
  competition?: {
    id: string;
    name: string;
  };
};

export type Odd = {
  id: string;
  odd: number;
  label: string;
  type: string;
  status: string;
  line?: number;
  homescore?: string;
  awayscore?: string;
  lowerLimit: string;
  upperLimit?: string;
};

export type OddCategory = {
  id: string;
  name: string;
  main: boolean;
  odds: Odd[];
};
