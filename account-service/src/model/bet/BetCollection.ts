import { inject, injectable } from "tsyringe";

import BetOdd from "./BetOdd";
import IBetRepository from "./IBetRepository";

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
