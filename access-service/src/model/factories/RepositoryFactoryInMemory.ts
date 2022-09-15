import IUserRepository from "../user/IUserRepository";
import UserRepositoryInMemory from "../user/UserRepositoryInMemory";
import IRepositoryFactory from "./IRepositoryFactory";

class RepositoryFactoryInMemory implements IRepositoryFactory {
  createUserRepository(): IUserRepository {
    return new UserRepositoryInMemory();
  }
}

export default RepositoryFactoryInMemory;
