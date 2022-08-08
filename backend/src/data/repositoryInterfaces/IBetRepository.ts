import BetOdd from "../../business/entities/BetOdd";
import Match from "../../business/entities/Match";
import User from "../../business/entities/User";

interface IBetRepository {
  insert(user: User, match: Match, odd: BetOdd, value: number): void;
}

export default IBetRepository;
