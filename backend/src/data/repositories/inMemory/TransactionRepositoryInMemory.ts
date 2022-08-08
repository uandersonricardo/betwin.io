import { singleton } from "tsyringe";

import Transaction from "../../../business/entities/Transaction";
import User from "../../../business/entities/User";
import ITransactionRepository from "../../repositoryInterfaces/ITransactionRepository";

@singleton()
class TransactionRepositoryInMemory implements ITransactionRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  insert(method: string, value: number, user: User) {
    throw new Error("Method not implemented.");
  }
}

export default TransactionRepositoryInMemory;
