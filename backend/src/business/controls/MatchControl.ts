import { injectable } from "tsyringe";

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

  public bet(user: User, match: Match, odd: BetOdd, value: number) {
    this.betCollection.insert(user, match, odd, value);
    this.accountCollection.changeCash(user, value);
  }

  public favorite(user: User, match: Match) {
    this.favoriteCollection.insert(user, match);
  }
}

export default MatchControl;
