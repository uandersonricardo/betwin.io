import BetOdd from "./BetOdd";

class Bet {
  private id;
  private value;
  private odd;
  private userId;
  private matchId;

  constructor(
    id: string,
    value: number,
    odd: BetOdd,
    userId: string,
    matchId: string
  ) {
    this.id = id;
    this.value = value;
    this.odd = odd;
    this.userId = userId;
    this.matchId = matchId;
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

  public getUserId() {
    return this.userId;
  }

  public setUserId(userId: string) {
    this.userId = userId;
  }

  public getMatchId() {
    return this.matchId;
  }

  public setMatchId(matchId: string) {
    this.matchId = matchId;
  }
}

export default Bet;
