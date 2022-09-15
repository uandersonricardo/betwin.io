import { injectable } from "tsyringe";

import SubsystemKambiApi from "../../subsystems/SubsystemKambiApi";
import AccountCollection from "../account/AccountCollection";
import BetCollection from "../bet/BetCollection";
import BetOdd from "../bet/BetOdd";
import FavoriteCollection from "../favorite/FavoriteCollection";

@injectable()
class MatchControl {
  private betCollection: BetCollection;
  private accountCollection: AccountCollection;
  private favoriteCollection: FavoriteCollection;
  private kambiSubsystem: SubsystemKambiApi;

  constructor(
    betCollection: BetCollection,
    accountCollection: AccountCollection,
    favoriteCollection: FavoriteCollection,
    kambiSubsystem: SubsystemKambiApi
  ) {
    this.betCollection = betCollection;
    this.accountCollection = accountCollection;
    this.favoriteCollection = favoriteCollection;
    this.kambiSubsystem = kambiSubsystem;
  }

  public async matches(filter: string) {
    const data = await this.kambiSubsystem.getMatches(filter);

    return data;
  }

  public async match(matchId: string) {
    const data = await this.kambiSubsystem.getMatch(matchId);

    return data;
  }

  public async bet(
    userId: string,
    matchId: string,
    odd: BetOdd,
    value: number
  ) {
    await this.accountCollection.debitCash(userId, value);

    try {
      await this.betCollection.insert(userId, matchId, odd, value);
    } catch (err) {
      await this.accountCollection.refoundCash(userId, value);
      throw err;
    }
  }

  public async favorite(userId: string, matchId: string) {
    await this.favoriteCollection.insert(userId, matchId);
  }
}

export default MatchControl;
