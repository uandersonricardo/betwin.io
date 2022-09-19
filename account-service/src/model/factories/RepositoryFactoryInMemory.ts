import AccountRepositoryInMemory from "../account/AccountRepositoryInMemory";
import IAccountRepository from "../account/IAccountRepository";
import ITransactionRepository from "../transaction/ITransactionRepository";
import TransactionRepositoryInMemory from "../transaction/TransactionRepositoryInMemory";
import IRepositoryFactory from "./IRepositoryFactory";

class RepositoryFactoryInMemory implements IRepositoryFactory {
  createAccountRepository(): IAccountRepository {
    return new AccountRepositoryInMemory();
  }

  createTransactionRepository(): ITransactionRepository {
    return new TransactionRepositoryInMemory();
  }
}

export default RepositoryFactoryInMemory;
