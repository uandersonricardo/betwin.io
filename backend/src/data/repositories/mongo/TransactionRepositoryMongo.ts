import { singleton } from "tsyringe";

import Transaction from "../../../business/entities/Transaction";
import ITransactionRepository from "../../repositoryInterfaces/ITransactionRepository";
import TransactionSchema from "../../schemas/mongo/Transaction";

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
    const transaction = await TransactionSchema.create({
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
}

export default TransactionRepositoryMongo;
