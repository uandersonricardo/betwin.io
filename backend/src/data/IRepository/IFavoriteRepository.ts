import Match from "../../business/entities/Match";
import User from "../../business/entities/User";

interface IFavoriteRepository {
  insert(user: User, match: Match): void;
}

export default IFavoriteRepository;
