import { singleton } from "tsyringe";

import ITransactionRepository from "./ITransactionRepository";
import Transaction from "./Transaction";
import TransactionSchemaMongo from "./TransactionSchemaMongo";

@singleton()
class TransactionRepositoryMongo implements ITransactionRepository {
  public async insert(
    type: string,
    method: string,
    value: number,
    userId: string,
    status: string,
    date: Date
  ) {
    const transaction = await TransactionSchemaMongo.create({
      type,
      method,
      value,
      user: userId,
      status,
      date
    });

    const newTransaction = new Transaction(
      transaction._id?.toString(),
      transaction.type,
      transaction.method,
      transaction.value,
      transaction.user?.toString(),
      transaction.status,
      transaction.date
    );

    return newTransaction;
  }

  public async updateStatus(id: string, status: string) {
    const transaction = await TransactionSchemaMongo.findById(id);

    if (!transaction) {
      throw new Error("Transaction not found");
    }

    transaction.status = status;
    await transaction.save();

    return new Transaction(
      transaction._id?.toString(),
      transaction.type,
      transaction.method,
      transaction.value,
      transaction.user?.toString(),
      transaction.status,
      transaction.date
    );
  }

  public async getStatus(id: string) {
    const transaction = await TransactionSchemaMongo.findById(id);

    if (!transaction) {
      throw new Error("Transaction not found");
    }

    return transaction.status;
  }

  public async getByUserId(userId: string) {
    const transactions = await TransactionSchemaMongo.find(
      { user: userId },
      null,
      {
        sort: { date: -1 }
      }
    );

    return transactions.map(transaction => {
      return new Transaction(
        transaction._id?.toString(),
        transaction.type,
        transaction.method,
        transaction.value,
        transaction.user?.toString(),
        transaction.status,
        transaction.date
      );
    });
  }
}

export default TransactionRepositoryMongo;
