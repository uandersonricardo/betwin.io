import IBetRepository from "../../data/iRepository/IBetRepository";
import BetOdd from "../entities/BetOdd";
import Match from "../entities/Match";
import User from "../entities/User";

class BetRegister {
  private betRepository;

  constructor(betRepository: IBetRepository) {
    this.betRepository = betRepository;
  }

  public insert(user: User, match: Match, odd: BetOdd, value: number) {
    this.betRepository.insert(user, match, odd, value);
  }
}
export default BetRegister;
