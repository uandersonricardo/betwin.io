class BetOdd {
  private option;
  private value;

  constructor(option: string, value: number) {
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
}

export default BetOdd;
