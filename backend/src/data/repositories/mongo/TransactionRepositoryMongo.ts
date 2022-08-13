import { singleton } from "tsyringe";

import User from "../../../business/entities/User";
import ITransactionRepository from "../../repositoryInterfaces/ITransactionRepository";
import TransactionSchema from "../../schemas/mongo/Transaction";

@singleton()
class TransactionRepositoryMongo implements ITransactionRepository {
  public async insert(type: string, method: string, value: number, user: User) {
    const date = new Date();

    await TransactionSchema.create({
      type,
      method,
      value,
      user: user.getId(),
      date
    });
  }
}

export default TransactionRepositoryMongo;
