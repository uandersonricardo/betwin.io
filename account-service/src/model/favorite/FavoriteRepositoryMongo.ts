import { singleton } from "tsyringe";

import FavoriteSchemaMongo from "./FavoriteSchemaMongo";
import IFavoriteRepository from "./IFavoriteRepository";

@singleton()
class FavoriteRepositoryMongo implements IFavoriteRepository {
  public async insert(userId: string, matchId: string) {
    await FavoriteSchemaMongo.create({
      user: userId,
      match: matchId
    });
  }
}

export default FavoriteRepositoryMongo;
