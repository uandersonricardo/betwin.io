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

  public async insert(
    type: string,
    method: string,
    value: number,
    userId: string,
    status: string,
    date: Date
  ) {
    const id = uuidv4();

    const transaction = new Transaction(
      id,
      type,
      method,
      value,
      userId,
      status,
      date
    );
    this.transactions.push(transaction);

    const newTransaction = new Transaction(
      transaction.getId(),
      transaction.getType(),
      transaction.getMethod(),
      transaction.getValue(),
      transaction.getUserId(),
      transaction.getStatus(),
      transaction.getDate()
    );

    return newTransaction;
  }
}

export default TransactionRepositoryInMemory;
