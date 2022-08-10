import { singleton } from "tsyringe";

import BetOdd from "../../../business/entities/BetOdd";
import Match from "../../../business/entities/Match";
import User from "../../../business/entities/User";
import IBetRepository from "../../repositoryInterfaces/IBetRepository";
import BetSchema from "../../schemas/mongo/Bet";

@singleton()
class BetRepositoryMongo implements IBetRepository {
  async insert(user: User, match: Match, odd: BetOdd, value: number) {
    await BetSchema.create({
      value,
      odd,
      user,
      match
    });
  }
}

export default BetRepositoryMongo;
