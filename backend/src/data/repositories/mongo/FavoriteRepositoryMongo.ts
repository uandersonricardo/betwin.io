import { singleton } from "tsyringe";

import IFavoriteRepository from "../../repositoryInterfaces/IFavoriteRepository";
import FavoriteSchema from "../../schemas/mongo/Favorite";

@singleton()
class FavoriteRepositoryMongo implements IFavoriteRepository {
  public async insert(userId: string, matchId: string) {
    await FavoriteSchema.create({
      user: userId,
      match: matchId
    });
  }
}

export default FavoriteRepositoryMongo;
