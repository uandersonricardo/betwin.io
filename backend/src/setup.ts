import { container } from "tsyringe";

import AccountRepositoryInMemory from "./data/repositories/inMemory/AccountRepositoryInMemory";
import BetRepositoryInMemory from "./data/repositories/inMemory/BetRepositoryInMemory";
import FavoriteRepositoryInMemory from "./data/repositories/inMemory/FavoriteRepositoryInMemory";
import TransactionRepositoryInMemory from "./data/repositories/inMemory/TransactionRepositoryInMemory";
import UserRepositoryInMemory from "./data/repositories/inMemory/UserRepositoryInMemory";
import IAccountRepository from "./data/repositoryInterfaces/IAccountRepository";
import IBetRepository from "./data/repositoryInterfaces/IBetRepository";
import IFavoriteRepository from "./data/repositoryInterfaces/IFavoriteRepository";
import ITransactionRepository from "./data/repositoryInterfaces/ITransactionRepository";
import IUserRepository from "./data/repositoryInterfaces/IUserRepository";

container.register<IUserRepository>("UserRepository", {
  useClass: UserRepositoryInMemory
});

container.register<IAccountRepository>("AccountRepository", {
  useClass: AccountRepositoryInMemory
});

container.register<IBetRepository>("BetRepository", {
  useClass: BetRepositoryInMemory
});

container.register<IFavoriteRepository>("FavoriteRepository", {
  useClass: FavoriteRepositoryInMemory
});

container.register<ITransactionRepository>("TransactionRepository", {
  useClass: TransactionRepositoryInMemory
});
