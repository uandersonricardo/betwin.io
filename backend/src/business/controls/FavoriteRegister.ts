import IFavoriteRepository from "../../data/IRepository/IFavoriteRepository";
import Match from "../entities/Match";
import User from "../entities/User";

class FavoriteRegister {
  private favoriteRepository;

  constructor(favoriteRepository: IFavoriteRepository) {
    this.favoriteRepository = favoriteRepository;
  }

  public insert(user: User, match: Match) {
    this.favoriteRepository.insert(user, match);
  }
}
export default FavoriteRegister;
