import { singleton } from "tsyringe";

import BetOdd from "./BetOdd";
import BetSchemaMongo from "./BetSchemaMongo";
import IBetRepository from "./IBetRepository";

@singleton()
class BetRepositoryMongo implements IBetRepository {
  public async insert(
    userId: string,
    matchId: string,
    odd: BetOdd,
    value: number
  ) {
    await BetSchemaMongo.create({
      value,
      odd: {
        value: odd.getValue(),
        option: odd.getOption()
      },
      user: userId,
      match: matchId
    });
  }
}

export default BetRepositoryMongo;
