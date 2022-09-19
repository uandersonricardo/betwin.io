import { injectable } from "tsyringe";

import { communicate } from "../../utils/services";
import BetCollection from "../bet/BetCollection";
import BetOdd from "../bet/BetOdd";

@injectable()
class MatchControl {
  private betCollection: BetCollection;

  constructor(betCollection: BetCollection) {
    this.betCollection = betCollection;
  }

  public async bet(
    userId: string,
    matchId: string,
    odd: BetOdd,
    value: number
  ) {
    await communicate("account-service", {
      method: "post",
      url: "/debit",
      data: {
        userId,
        value
      }
    });

    try {
      await this.betCollection.insert(userId, matchId, odd, value);
    } catch (err) {
      await communicate("account-service", {
        method: "post",
        url: "/refound",
        data: {
          userId,
          value
        }
      });

      throw err;
    }
  }
}

export default MatchControl;
