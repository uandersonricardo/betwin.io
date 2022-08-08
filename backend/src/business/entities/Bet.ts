import BetOdd from "./BetOdd";
import Match from "./Match";
import User from "./User";

class Bet {
  private id;
  private value;
  private odd;
  private user;
  private match;

  constructor(
    id: string,
    value: number,
    odd: BetOdd,
    user: User,
    match: Match
  ) {
    this.id = id;
    this.value = value;
    this.odd = odd;
    this.user = user;
    this.match = match;
  }

  public getId() {
    return this.id;
  }

  public getValue() {
    return this.value;
  }

  public setValue(value: number) {
    this.value = value;
  }

  public getOdd() {
    return this.odd;
  }

  public setOdd(odd: BetOdd) {
    this.odd = odd;
  }

  public getUser() {
    return this.user;
  }

  public setUser(user: User) {
    this.user = user;
  }

  public getMatch() {
    return this.match;
  }

  public setMatch(match: Match) {
    this.match = match;
  }
}

export default Bet;
