import { singleton } from "tsyringe";

import Bet from "../../../business/entities/Bet";
import BetOdd from "../../../business/entities/BetOdd";
import Match from "../../../business/entities/Match";
import User from "../../../business/entities/User";
import IBetRepository from "../../repositoryInterfaces/IBetRepository";
import BetSchema from "../../schemas/mongo/Bet";

@singleton()
class BetRepositoryMongo implements IBetRepository {
  public async insert(user: User, match: Match, odd: BetOdd, value: number) {
    await BetSchema.create({
      value,
      odd: {
        value: odd.getValue(),
        option: odd.getOption()
      },
      user: user.getId(),
      match: match.getId()
    });
  }
}

export default BetRepositoryMongo;
