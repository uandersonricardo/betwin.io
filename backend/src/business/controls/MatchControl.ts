import axios from "axios";
import { injectable } from "tsyringe";

import { MatchInfo } from "../../types/index.d.";
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

    const matches: MatchInfo[] = data.events.map((match: any) => ({
      id: match.event.id,
      home: match.event.homeName,
      away: match.event.awayName,
      date: new Date(match.event.start),
      status: match.event.state,
      odds:
        match.betOffers.length > 0
          ? match.betOffers[0].outcomes?.map((outcome: any) => ({
              odd: outcome.odds,
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
    }));

    return data;
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
