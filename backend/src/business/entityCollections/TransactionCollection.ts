import { inject, injectable } from "tsyringe";

import ITransactionRepository from "../../data/repositoryInterfaces/ITransactionRepository";
import User from "../entities/User";

@injectable()
class TransactionCollection {
  private transactionRepository;

  constructor(
    @inject("TransactionRepository")
    transactionRepository: ITransactionRepository
  ) {
    this.transactionRepository = transactionRepository;
  }

  public async insert(
    type: string,
    method: string,
    value: number,
    userId: string,
    status: string,
    date: Date
  ) {
    const transaction = await this.transactionRepository.insert(
      type,
      method,
      value,
      userId,
      status,
      date
    );

    return transaction;
  }

  public async updateStatus(id: string, status: string) {
    const transaction = await this.transactionRepository.updateStatus(
      id,
      status
    );

    return transaction;
  }

  public async getStatus(id: string) {
    const transaction = await this.transactionRepository.getStatus(id);

    return transaction;
  }
}

export default TransactionCollection;
