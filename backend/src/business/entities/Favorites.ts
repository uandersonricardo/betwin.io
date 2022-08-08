import Match from "./Match";
import User from "./User";

class Favorites {
  private match;
  private user;

  constructor(match: Match, user: User) {
    this.match = match;
    this.user = user;
  }

  public getMatch() {
    return this.match;
  }

  public setMatch(match: Match) {
    this.match = match;
  }

  public getUser() {
    return this.user;
  }

  public setUser(user: User) {
    this.user = user;
  }
}

export default Favorites;
