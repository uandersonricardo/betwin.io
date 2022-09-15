import IUserRepository from "../user/IUserRepository";
import UserRepositoryMongo from "../user/UserRepositoryMongo";
import IRepositoryFactory from "./IRepositoryFactory";

class RepositoryFactoryMongo implements IRepositoryFactory {
  createUserRepository(): IUserRepository {
    return new UserRepositoryMongo();
  }
}

export default RepositoryFactoryMongo;
