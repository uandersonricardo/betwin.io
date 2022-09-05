import IAccountRepository from "../account/IAccountRepository";
import IBetRepository from "../bet/IBetRepository";
import IFavoriteRepository from "../favorite/IFavoriteRepository";
import ITransactionRepository from "../transaction/ITransactionRepository";
import IUserRepository from "../user/IUserRepository";

interface IRepositoryFactory {
  createUserRepository(): IUserRepository;
  createAccountRepository(): IAccountRepository;
  createBetRepository(): IBetRepository;
  createFavoriteRepository(): IFavoriteRepository;
  createTransactionRepository(): ITransactionRepository;
}

export default IRepositoryFactory;
