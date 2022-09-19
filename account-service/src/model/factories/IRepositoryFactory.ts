import IAccountRepository from "../account/IAccountRepository";
import ITransactionRepository from "../transaction/ITransactionRepository";

interface IRepositoryFactory {
  createAccountRepository(): IAccountRepository;
  createTransactionRepository(): ITransactionRepository;
}

export default IRepositoryFactory;
