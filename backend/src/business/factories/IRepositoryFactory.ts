import IAccountRepository from "../../data/repositoryInterfaces/IAccountRepository";
import IBetRepository from "../../data/repositoryInterfaces/IBetRepository";
import IFavoriteRepository from "../../data/repositoryInterfaces/IFavoriteRepository";
import ITransactionRepository from "../../data/repositoryInterfaces/ITransactionRepository";
import IUserRepository from "../../data/repositoryInterfaces/IUserRepository";

interface IRepositoryFactory {
  createUserRepository(): IUserRepository;
  createAccountRepository(): IAccountRepository;
  createBetRepository(): IBetRepository;
  createFavoriteRepository(): IFavoriteRepository;
  createTransactionRepository(): ITransactionRepository;
}

export default IRepositoryFactory;
