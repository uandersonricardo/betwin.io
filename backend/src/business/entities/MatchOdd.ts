class MatchOdd {
  private option;
  private odd;

  constructor(option: string, odd: number) {
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
}

export default MatchOdd;
