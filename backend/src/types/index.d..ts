export type Sport = {
  id: string;
  name: string;
  countries: Country[];
};

export type Country = {
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
  odds: Odd[];
  currentTime?: unknown;
  score?: {
    home: string;
    away: string;
    info?: string;
  };
};

export type Odd = {
  odd: number;
  type: string;
  status: string;
};
