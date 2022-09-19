import { injectable } from "tsyringe";

import AccountCollection from "../account/AccountCollection";

@injectable()
class DebitControl {
  private accountCollection;

  constructor(accountCollection: AccountCollection) {
    this.accountCollection = accountCollection;
  }

  public async debit(userId: string, value: number) {
    await this.accountCollection.debitCash(userId, value);
  }
}

export default DebitControl;
