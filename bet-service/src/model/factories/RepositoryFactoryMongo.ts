import BetRepositoryMongo from "../bet/BetRepositoryMongo";
import IBetRepository from "../bet/IBetRepository";
import IRepositoryFactory from "./IRepositoryFactory";

class RepositoryFactoryMongo implements IRepositoryFactory {
  createBetRepository(): IBetRepository {
    return new BetRepositoryMongo();
  }
}

export default RepositoryFactoryMongo;
