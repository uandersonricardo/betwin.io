import { injectable } from "tsyringe";

import TransactionCollection from "../entityCollections/TransactionCollection";

@injectable()
class TransactionControl {
  private transactionCollection;

  constructor(transactionCollection: TransactionCollection) {
    this.transactionCollection = transactionCollection;
  }

  public async transactions(userId: string) {
    const transactions = await this.transactionCollection.getByUserId(userId);

    return transactions;
  }
}

export default TransactionControl;
