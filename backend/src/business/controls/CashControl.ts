import { injectable } from "tsyringe";

import AccountCollection from "../entityCollections/AccountCollection";

@injectable()
class CashControl {
  private accountCollection;

  constructor(accountCollection: AccountCollection) {
    this.accountCollection = accountCollection;
  }

  public async cash(userId: string) {
    const account = await this.accountCollection.findByUserId(userId);

    return account.getCash();
  }
}

export default CashControl;
