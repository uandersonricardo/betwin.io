import BetRepositoryInMemory from "../bet/BetRepositoryInMemory";
import IBetRepository from "../bet/IBetRepository";
import IRepositoryFactory from "./IRepositoryFactory";

class RepositoryFactoryInMemory implements IRepositoryFactory {
  createBetRepository(): IBetRepository {
    return new BetRepositoryInMemory();
  }
}

export default RepositoryFactoryInMemory;
