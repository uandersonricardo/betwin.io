import { Request, Response } from "express";
import { injectable } from "tsyringe";

import BetOdd from "../../model/bet/BetOdd";
import Facade from "../../model/facades/Facade";

@injectable()
class MatchPresenter {
  private facade;

  constructor(facade: Facade) {
    this.facade = facade;
  }

  public async bet(req: Request, res: Response) {
    await this.facade.bet(
      req.params.authenticatedUserId,
      req.body.matchId,
      new BetOdd(req.body.oddId, req.body.oddValue),
      req.body.value
    );

    res.status(201).json();
  }
}

export default MatchPresenter;
