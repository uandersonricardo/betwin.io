import AccountRepositoryInMemory from "../../data/repositories/inMemory/AccountRepositoryInMemory";
import BetRepositoryInMemory from "../../data/repositories/inMemory/BetRepositoryInMemory";
import FavoriteRepositoryInMemory from "../../data/repositories/inMemory/FavoriteRepositoryInMemory";
import TransactionRepositoryInMemory from "../../data/repositories/inMemory/TransactionRepositoryInMemory";
import UserRepositoryInMemory from "../../data/repositories/inMemory/UserRepositoryInMemory";
import IAccountRepository from "../../data/repositoryInterfaces/IAccountRepository";
import IBetRepository from "../../data/repositoryInterfaces/IBetRepository";
import IFavoriteRepository from "../../data/repositoryInterfaces/IFavoriteRepository";
import ITransactionRepository from "../../data/repositoryInterfaces/ITransactionRepository";
import IUserRepository from "../../data/repositoryInterfaces/IUserRepository";
import IRepositoryFactory from "./IRepositoryFactory";

class RepositoryFactoryInMemory implements IRepositoryFactory {
  createUserRepository(): IUserRepository {
    return new UserRepositoryInMemory();
  }

  createAccountRepository(): IAccountRepository {
    return new AccountRepositoryInMemory();
  }

  createBetRepository(): IBetRepository {
    return new BetRepositoryInMemory();
  }

  createFavoriteRepository(): IFavoriteRepository {
    return new FavoriteRepositoryInMemory();
  }

  createTransactionRepository(): ITransactionRepository {
    return new TransactionRepositoryInMemory();
  }
}

export default RepositoryFactoryInMemory;
