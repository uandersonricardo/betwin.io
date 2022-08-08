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

  insert(user: User, match: Match) {
    throw new Error("Method not implemented.");
  }
}

export default FavoriteRepositoryInMemory;
