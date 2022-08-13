import AccountRepositoryMongo from "../../data/repositories/mongo/AccountRepositoryMongo";
import BetRepositoryMongo from "../../data/repositories/mongo/BetRepositoryMongo";
import FavoriteRepositoryMongo from "../../data/repositories/mongo/FavoriteRepositoryMongo";
import TransactionRepositoryMongo from "../../data/repositories/mongo/TransactionRepositoryMongo";
import UserRepositoryMongo from "../../data/repositories/mongo/UserRepositoryMongo";
import IAccountRepository from "../../data/repositoryInterfaces/IAccountRepository";
import IBetRepository from "../../data/repositoryInterfaces/IBetRepository";
import IFavoriteRepository from "../../data/repositoryInterfaces/IFavoriteRepository";
import ITransactionRepository from "../../data/repositoryInterfaces/ITransactionRepository";
import IUserRepository from "../../data/repositoryInterfaces/IUserRepository";
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
