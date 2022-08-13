import { singleton } from "tsyringe";

import Favorite from "../../../business/entities/Favorite";
import Match from "../../../business/entities/Match";
import User from "../../../business/entities/User";
import IFavoriteRepository from "../../repositoryInterfaces/IFavoriteRepository";

@singleton()
class FavoriteRepositoryInMemory implements IFavoriteRepository {
  private favorites: Favorite[];

  constructor() {
    this.favorites = [];
  }

  public async insert(user: User, match: Match) {
    const newFavorite = new Favorite(user, match);
    this.favorites.push(newFavorite);
  }
}

export default FavoriteRepositoryInMemory;
