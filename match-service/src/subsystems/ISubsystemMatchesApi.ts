import { MatchInfo, Sport } from "../types";

interface ISubsystemMatchesApi {
  getGroupedMatches(filter: string): Promise<Sport[]>;
  getMatch(matchId: string): Promise<MatchInfo>;
}

export default ISubsystemMatchesApi;
