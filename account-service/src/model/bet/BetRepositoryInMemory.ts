import { singleton } from "tsyringe";
import { v4 as uuidv4 } from "uuid";

import Bet from "./Bet";
import BetOdd from "./BetOdd";
import IBetRepository from "./IBetRepository";

@singleton()
class BetRepositoryInMemory implements IBetRepository {
  private bets: Bet[];

  constructor() {
    this.bets = [];
  }

  public async insert(
    userId: string,
    matchId: string,
    odd: BetOdd,
    value: number
  ) {
    const id = uuidv4();

    const newBet = new Bet(id, value, odd, userId, matchId);
    this.bets.push(newBet);
  }
}

export default BetRepositoryInMemory;
