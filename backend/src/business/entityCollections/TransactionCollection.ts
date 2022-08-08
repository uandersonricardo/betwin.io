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

  public insert(method: string, value: number, user: User) {
    this.transactionRepository.insert(method, value, user);
  }
}

export default TransactionCollection;
