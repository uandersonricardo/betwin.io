import { singleton } from "tsyringe";

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

  insert(user: User, match: Match, odd: BetOdd, value: number) {
    throw new Error("Method not implemented.");
  }
}

export default BetRepositoryInMemory;
