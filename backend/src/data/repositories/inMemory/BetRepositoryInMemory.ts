import { singleton } from "tsyringe";
import { v4 as uuidv4 } from "uuid";

import Bet from "../../../business/entities/Bet";
import BetOdd from "../../../business/entities/BetOdd";
import Match from "../../../business/entities/Match";
import User from "../../../business/entities/User";
import IBetRepository from "../../repositoryInterfaces/IBetRepository";

@singleton()
class BetRepositoryInMemory implements IBetRepository {
  private bets: Bet[];

  constructor() {
    this.bets = [];
  }

  async insert(user: User, match: Match, odd: BetOdd, value: number) {
    const id = uuidv4();
    const date = new Date();

    const newBet = new Bet(id, value, odd, user, match);
    this.bets.push(newBet);
  }
}

export default BetRepositoryInMemory;
