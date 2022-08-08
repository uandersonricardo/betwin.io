import BetOdd from "../entities/BetOdd";
import Match from "../entities/Match";
import User from "../entities/User";
import AccountRegister from "./AccountRegister";
import BetRegister from "./BetRegister";
import FavoriteRegister from "./FavoriteRegister";

class MatchControl {
  private betRegister: BetRegister;
  private accountRegister: AccountRegister;
  private favoriteRegister: FavoriteRegister;

  constructor(
    betRegister: BetRegister,
    accountRegister: AccountRegister,
    favoriteRegister: FavoriteRegister
  ) {
    this.betRegister = betRegister;
    this.accountRegister = accountRegister;
    this.favoriteRegister = favoriteRegister;
  }

  public bet(user: User, match: Match, odd: BetOdd, value: number) {
    this.betRegister.insert(user, match, odd, value);
    this.accountRegister.changeCash(user, value);
  }

  public favorite(user: User, match: Match) {
    this.favoriteRegister.insert(user, match);
  }
}

export default MatchControl;
