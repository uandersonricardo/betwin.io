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

  public async matches(req: Request, res: Response) {
    const matches = await this.facade.matches(
      req.query.filter?.toString() || ""
    );

    res.status(200).json({ matches });
  }

  public async match(req: Request, res: Response) {
    const match = await this.facade.match(req.params.matchId);

    res.status(200).json({ match });
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

  public async favorite(req: Request, res: Response) {
    await this.facade.favorite(
      req.params.authenticatedUserId,
      req.body.matchId
    );

    res.status(201).json();
  }
}

export default MatchPresenter;
