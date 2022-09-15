import BetOdd from "./BetOdd";

interface IBetRepository {
  insert(
    userId: string,
    matchId: string,
    odd: BetOdd,
    value: number
  ): Promise<void>;
}

export default IBetRepository;
