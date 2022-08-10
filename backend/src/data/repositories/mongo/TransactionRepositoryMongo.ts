import { singleton } from "tsyringe";

import User from "../../../business/entities/User";
import ITransactionRepository from "../../repositoryInterfaces/ITransactionRepository";
import TransactionSchema from "../../schemas/mongo/Transaction";

@singleton()
class TransactionRepositoryMongo implements ITransactionRepository {
  async insert(method: string, value: number, user: User) {
    const date = new Date();
    await TransactionSchema.create({
      type: "deposit",
      method,
      value,
      user,
      date
    });
  }
}

export default TransactionRepositoryMongo;
