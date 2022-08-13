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

  public async insert(type: string, method: string, value: number, user: User) {
    const id = uuidv4();
    const date = new Date();

    const newTransaction = new Transaction(id, type, method, value, user, date);
    this.transactions.push(newTransaction);
  }
}

export default TransactionRepositoryInMemory;
