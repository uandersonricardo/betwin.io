import Match from "./Match";

class BetOdd {
  private match;
  private option;
  private odd;

  constructor(match: Match, option: string, odd: number) {
    this.match = match;
    this.option = option;
    this.odd = odd;
  }

  public getOption() {
    return this.option;
  }

  public setOption(option: string) {
    this.option = option;
  }

  public getOdd() {
    return this.odd;
  }

  public setOdd(odd: number) {
    this.odd = odd;
  }

  public getMatch() {
    return this.match;
  }

  public setMatch(match: Match) {
    this.match = match;
  }
}

export default BetOdd;
