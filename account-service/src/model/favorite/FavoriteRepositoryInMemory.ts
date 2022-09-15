import { singleton } from "tsyringe";

import Favorite from "./Favorite";
import IFavoriteRepository from "./IFavoriteRepository";

@singleton()
class FavoriteRepositoryInMemory implements IFavoriteRepository {
  private favorites: Favorite[];

  constructor() {
    this.favorites = [];
  }

  public async insert(userId: string, matchId: string) {
    const newFavorite = new Favorite(userId, matchId);

    this.favorites.push(newFavorite);
  }
}

export default FavoriteRepositoryInMemory;
