import BetOdd from "../entities/BetOdd";
import Match from "../entities/Match";
import User from "../entities/User";

class MatchControl {
  private betRegister: BetRegister;
  private accountRegister: AccountRegister;
  private favoriteRegister: FavoriteRegister;

  public Bet(user: User, match: Match, odd: BetOdd, value: number) {
    this.betRegister.insert(user, match, odd, value);
    this.accountRegister.changeCash(user, value);
  }

  public favorite(user: User, match: Match) {
    this.favoriteRegister.insert(user, match);
  }
}

export default MatchControl;
