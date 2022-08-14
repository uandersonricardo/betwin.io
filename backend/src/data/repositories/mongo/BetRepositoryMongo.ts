import { singleton } from "tsyringe";

import BetOdd from "../../../business/entities/BetOdd";
import IBetRepository from "../../repositoryInterfaces/IBetRepository";
import BetSchema from "../../schemas/mongo/Bet";

@singleton()
class BetRepositoryMongo implements IBetRepository {
  public async insert(
    userId: string,
    matchId: string,
    odd: BetOdd,
    value: number
  ) {
    await BetSchema.create({
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
