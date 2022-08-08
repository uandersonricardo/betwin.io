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

  public insert(user: User, match: Match, odd: BetOdd, value: number) {
    this.betRepository.insert(user, match, odd, value);
  }
}
export default BetCollection;
