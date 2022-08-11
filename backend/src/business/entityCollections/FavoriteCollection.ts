import { inject, injectable } from "tsyringe";

import IFavoriteRepository from "../../data/repositoryInterfaces/IFavoriteRepository";
import Match from "../entities/Match";
import User from "../entities/User";

@injectable()
class FavoriteCollection {
  private favoriteRepository;

  constructor(
    @inject("FavoriteRepository") favoriteRepository: IFavoriteRepository
  ) {
    this.favoriteRepository = favoriteRepository;
  }

  public async insert(user: User, match: Match) {
    await this.favoriteRepository.insert(user, match);
  }
}
export default FavoriteCollection;
