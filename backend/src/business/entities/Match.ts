import MatchOdd from "./MatchOdd";

class Match {
  private id;
  private home;
  private away;
  private status;
  private date;
  private time;
  private odds;

  constructor(
    id: string,
    home: string,
    away: string,
    status: string,
    date: Date,
    time: string,
    odds: MatchOdd[]
  ) {
    this.id = id;
    this.home = home;
    this.away = away;
    this.status = status;
    this.date = date;
    this.time = time;
    this.odds = odds;
  }

  public getId() {
    return this.id;
  }

  public getHome() {
    return this.home;
  }

  public setHome(home: string) {
    this.home = home;
  }

  public getAway() {
    return this.away;
  }

  public setAway(away: string) {
    this.away = away;
  }

  public getStatus() {
    return this.status;
  }

  public setStatus(status: string) {
    this.status = status;
  }

  public getDate() {
    return this.date;
  }

  public setDate(date: Date) {
    this.date = date;
  }

  public getTime() {
    return this.time;
  }

  public setTime(time: string) {
    this.time = time;
  }

  public getOdds() {
    return this.odds;
  }

  public setOdds(odds: MatchOdd[]) {
    this.odds = odds;
  }
}

export default Match;
