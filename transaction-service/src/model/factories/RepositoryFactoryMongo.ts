import AccountRepositoryMongo from "../account/AccountRepositoryMongo";
import IAccountRepository from "../account/IAccountRepository";
import ITransactionRepository from "../transaction/ITransactionRepository";
import TransactionRepositoryMongo from "../transaction/TransactionRepositoryMongo";
import IRepositoryFactory from "./IRepositoryFactory";

class RepositoryFactoryMongo implements IRepositoryFactory {
  createAccountRepository(): IAccountRepository {
    return new AccountRepositoryMongo();
  }

  createTransactionRepository(): ITransactionRepository {
    return new TransactionRepositoryMongo();
  }
}

export default RepositoryFactoryMongo;
