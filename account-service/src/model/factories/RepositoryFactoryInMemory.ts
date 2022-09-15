import AccountRepositoryInMemory from "../account/AccountRepositoryInMemory";
import IAccountRepository from "../account/IAccountRepository";
import BetRepositoryInMemory from "../bet/BetRepositoryInMemory";
import IBetRepository from "../bet/IBetRepository";
import FavoriteRepositoryInMemory from "../favorite/FavoriteRepositoryInMemory";
import IFavoriteRepository from "../favorite/IFavoriteRepository";
import ITransactionRepository from "../transaction/ITransactionRepository";
import TransactionRepositoryInMemory from "../transaction/TransactionRepositoryInMemory";
import IUserRepository from "../user/IUserRepository";
import UserRepositoryInMemory from "../user/UserRepositoryInMemory";
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
