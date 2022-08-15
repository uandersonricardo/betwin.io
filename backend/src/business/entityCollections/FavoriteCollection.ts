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

  public async insert(userId: string, matchId: string) {
    await this.favoriteRepository.insert(userId, matchId);
  }
}
export default FavoriteCollection;
