import { singleton } from "tsyringe";
import { v4 as uuidv4 } from "uuid";

import Transaction from "../../../business/entities/Transaction";
import User from "../../../business/entities/User";
import ITransactionRepository from "../../repositoryInterfaces/ITransactionRepository";

@singleton()
class TransactionRepositoryInMemory implements ITransactionRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  async insert(method: string, value: number, user: User) {
    const id = uuidv4();
    const date = new Date();

    const newTransaction = new Transaction(
      id,
      "deposit",
      method,
      value,
      user,
      date
    );
    this.transactions.push(newTransaction);
  }
}

export default TransactionRepositoryInMemory;
