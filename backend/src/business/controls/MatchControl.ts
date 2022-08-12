import axios from "axios";
import { injectable } from "tsyringe";

import { MatchInfo, Sport } from "../../types/index.d.";
import BetOdd from "../entities/BetOdd";
import Match from "../entities/Match";
import User from "../entities/User";
import AccountCollection from "../entityCollections/AccountCollection";
import BetCollection from "../entityCollections/BetCollection";
import FavoriteCollection from "../entityCollections/FavoriteCollection";

@injectable()
class MatchControl {
  private betCollection: BetCollection;
  private accountCollection: AccountCollection;
  private favoriteCollection: FavoriteCollection;

  constructor(
    betCollection: BetCollection,
    accountCollection: AccountCollection,
    favoriteCollection: FavoriteCollection
  ) {
    this.betCollection = betCollection;
    this.accountCollection = accountCollection;
    this.favoriteCollection = favoriteCollection;
  }

  public async matches(filter: string) {
    const { data } = await axios.get(
      `https://eu-offering.kambicdn.org/offering/v2018/ub/listView${filter}.json?lang=pt_BR&market=BR`
    );

    const groupByCompetitions = (events: any[]) => {
      const competitions: any[] = [];
      events.forEach(item => {
        const id = item.event.path.map((path: any) => path.termKey).join("/");
        const collection = competitions.find(
          competition => competition.id === id
        );
        if (!collection) {
          competitions.push({
            id,
            name: item.event.path[item.event.path.length - 1].name,
            matches: [item]
          });
        } else {
          collection.matches.push(item);
        }
      });
      return competitions;
    };

    const groupBySports = (competitions: any[]) => {
      const sports: any[] = [];
      competitions.forEach(competition => {
        const item = competition.matches[0];
        const id = item.event.path[0].termKey;
        const collection = sports.find(sport => sport.id === id);
        if (!collection) {
          sports.push({
            id,
            name: item.event.path[0].name,
            competitions: [competition]
          });
        } else {
          collection.competitions.push(competition);
        }
      });
      return sports;
    };

    const groupedMatches: Sport[] = groupBySports(
      groupByCompetitions(data.events)
    ).map((sport: any) => ({
      ...sport,
      competitions: sport.competitions.map((competiton: any) => ({
        ...competiton,
        matches: competiton.matches.map((match: any) => ({
          id: match.event.id,
          home: match.event.homeName,
          away: match.event.awayName,
          date: new Date(match.event.start),
          status: match.event.state,
          odds:
            match.betOffers.length > 0
              ? match.betOffers[0].outcomes?.map((outcome: any) => ({
                  odd: outcome.odds,
                  label: outcome.label,
                  type: outcome.type,
                  status: outcome.status
                }))
              : undefined,
          score: match.liveData?.score
            ? {
                home: match.liveData.score.home,
                away: match.liveData.score.away,
                info: match.liveData.score.info
              }
            : undefined,
          currentTime: match.liveData?.matchClock
        }))
      }))
    }));

    return groupedMatches;
  }

  public async bet(user: User, match: Match, odd: BetOdd, value: number) {
    await this.betCollection.insert(user, match, odd, value);
    await this.accountCollection.changeCash(user, value);
  }

  public async favorite(user: User, match: Match) {
    await this.favoriteCollection.insert(user, match);
  }
}

export default MatchControl;
