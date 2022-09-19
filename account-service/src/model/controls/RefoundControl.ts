import { injectable } from "tsyringe";

import AccountCollection from "../account/AccountCollection";

@injectable()
class RefoundControl {
  private accountCollection;

  constructor(accountCollection: AccountCollection) {
    this.accountCollection = accountCollection;
  }

  public async refound(userId: string, value: number) {
    await this.accountCollection.refoundCash(userId, value);
  }
}

export default RefoundControl;
