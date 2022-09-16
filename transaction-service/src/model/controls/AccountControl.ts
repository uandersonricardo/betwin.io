import { injectable } from "tsyringe";

import AccountCollection from "../account/AccountCollection";

@injectable()
class AccountControl {
  private accountCollection;

  constructor(accountCollection: AccountCollection) {
    this.accountCollection = accountCollection;
  }

  public async createAccount(userId: string) {
    const account = await this.accountCollection.insert(userId);

    return account;
  }
}

export default AccountControl;
