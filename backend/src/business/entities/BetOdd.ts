import Match from "./Match";

class BetOdd {
  private match;
  private option;
  private value;

  constructor(match: Match, option: string, value: number) {
    this.match = match;
    this.option = option;
    this.value = value;
  }

  public getOption() {
    return this.option;
  }

  public setOption(option: string) {
    this.option = option;
  }

  public getValue() {
    return this.value;
  }

  public setValue(value: number) {
    this.value = value;
  }

  public getMatch() {
    return this.match;
  }

  public setMatch(match: Match) {
    this.match = match;
  }
}

export default BetOdd;
