class Account {
  private userId;
  private cash;

  constructor(userId: string, cash: number) {
    this.userId = userId;
    this.cash = cash;
  }

  public getUserId() {
    return this.userId;
  }

  public setUserId(userId: string) {
    this.userId = userId;
  }

  public getCash() {
    return this.cash;
  }

  public setCash(cash: number) {
    this.cash = cash;
  }
}

export default Account;
