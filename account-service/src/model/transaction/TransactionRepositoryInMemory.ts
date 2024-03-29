import { singleton } from "tsyringe";
import { v4 as uuidv4 } from "uuid";

import ITransactionRepository from "./ITransactionRepository";
import Transaction from "./Transaction";

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

  public async updateStatus(id: string, status: string) {
    const transaction = this.transactions.find(t => t.getId() === id);

    if (!transaction) {
      throw new Error("Transaction not found");
    }

    transaction.setStatus(status);

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

  public async getStatus(id: string) {
    const transaction = this.transactions.find(t => t.getId() === id);

    if (!transaction) {
      throw new Error("Transaction not found");
    }

    return transaction.getStatus();
  }

  public async getByUserId(userId: string) {
    const transactions = this.transactions.filter(
      t => t.getUserId() === userId
    );

    return transactions
      .map(transaction => {
        return new Transaction(
          transaction.getId(),
          transaction.getType(),
          transaction.getMethod(),
          transaction.getValue(),
          transaction.getUserId(),
          transaction.getStatus(),
          transaction.getDate()
        );
      })
      .reverse();
  }
}

export default TransactionRepositoryInMemory;
