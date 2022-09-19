import { container, inject, injectable, singleton } from "tsyringe";

import BetOdd from "../bet/BetOdd";
import IBetRepository from "../bet/IBetRepository";
import MatchControl from "../controls/MatchControl";
import IRepositoryFactory from "../factories/IRepositoryFactory";

@injectable()
@singleton()
class Facade {
  private repositoryFactory;
  private matchControl;

  constructor(
    @inject("RepositoryFactory") repositoryFactory: IRepositoryFactory
  ) {
    this.repositoryFactory = repositoryFactory;

    container.register<IBetRepository>("BetRepository", {
      useValue: this.repositoryFactory.createBetRepository()
    });

    this.matchControl = container.resolve(MatchControl);
  }

  public async bet(
    userId: string,
    matchId: string,
    odd: BetOdd,
    value: number
  ) {
    await this.matchControl.bet(userId, matchId, odd, value);
  }
}

export default Facade;
