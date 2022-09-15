import AccountRepositoryMongo from "../account/AccountRepositoryMongo";
import IAccountRepository from "../account/IAccountRepository";
import BetRepositoryMongo from "../bet/BetRepositoryMongo";
import IBetRepository from "../bet/IBetRepository";
import FavoriteRepositoryMongo from "../favorite/FavoriteRepositoryMongo";
import IFavoriteRepository from "../favorite/IFavoriteRepository";
import ITransactionRepository from "../transaction/ITransactionRepository";
import TransactionRepositoryMongo from "../transaction/TransactionRepositoryMongo";
import IUserRepository from "../user/IUserRepository";
import UserRepositoryMongo from "../user/UserRepositoryMongo";
import IRepositoryFactory from "./IRepositoryFactory";

class RepositoryFactoryMongo implements IRepositoryFactory {
  createUserRepository(): IUserRepository {
    return new UserRepositoryMongo();
  }

  createAccountRepository(): IAccountRepository {
    return new AccountRepositoryMongo();
  }

  createBetRepository(): IBetRepository {
    return new BetRepositoryMongo();
  }

  createFavoriteRepository(): IFavoriteRepository {
    return new FavoriteRepositoryMongo();
  }

  createTransactionRepository(): ITransactionRepository {
    return new TransactionRepositoryMongo();
  }
}

export default RepositoryFactoryMongo;
