import { singleton } from "tsyringe";

import Match from "../../../business/entities/Match";
import User from "../../../business/entities/User";
import IFavoriteRepository from "../../repositoryInterfaces/IFavoriteRepository";
import FavoriteSchema from "../../schemas/mongo/Favorite";

@singleton()
class FavoriteRepositoryMongo implements IFavoriteRepository {
  public async insert(user: User, match: Match) {
    await FavoriteSchema.create({
      user: user.getId(),
      match: match.getId()
    });
  }
}

export default FavoriteRepositoryMongo;
