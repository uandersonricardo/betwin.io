import IUserRepository from "../user/IUserRepository";

interface IRepositoryFactory {
  createUserRepository(): IUserRepository;
}

export default IRepositoryFactory;
