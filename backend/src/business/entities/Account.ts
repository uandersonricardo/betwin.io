import User from "./User";

class Account {
  private user;
  private cash;

  constructor(user: User, cash: number) {
    this.user = user;
    this.cash = cash;
  }

  public getUser() {
    return this.user;
  }

  public setUser(user: User) {
    this.user = user;
  }

  public getCash() {
    return this.cash;
  }

  public setCash(cash: number) {
    this.cash = cash;
  }
}

export default Account;
