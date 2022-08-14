import { inject, injectable } from "tsyringe";

import IBetRepository from "../../data/repositoryInterfaces/IBetRepository";
import BetOdd from "../entities/BetOdd";
import Match from "../entities/Match";
import User from "../entities/User";

@injectable()
class BetCollection {
  private betRepository;

  constructor(@inject("BetRepository") betRepository: IBetRepository) {
    this.betRepository = betRepository;
  }

  public async insert(
    userId: string,
    matchId: string,
    odd: BetOdd,
    value: number
  ) {
    await this.betRepository.insert(userId, matchId, odd, value);
  }
}
export default BetCollection;
