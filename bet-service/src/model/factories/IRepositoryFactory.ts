import IBetRepository from "../bet/IBetRepository";

interface IRepositoryFactory {
  createBetRepository(): IBetRepository;
}

export default IRepositoryFactory;
