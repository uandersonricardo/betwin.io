import { injectable } from "tsyringe";

import User from "../entities/User";
import TransactionCollection from "../entityCollections/TransactionCollection";

@injectable()
class DepositControl {
  private transactionCollection: TransactionCollection;

  constructor(transactionCollection: TransactionCollection) {
    this.transactionCollection = transactionCollection;
  }

  public createTransactionDeposit(method: string, value: number, user: User) {
    this.transactionCollection.insert(method, value, user);
  }
}

export default DepositControl;
