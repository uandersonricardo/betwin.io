import { Request, Response } from "express";
import { injectable } from "tsyringe";

import Facade from "../../model/facades/Facade";

@injectable()
class MatchPresenter {
  private facade;

  constructor(facade: Facade) {
    this.facade = facade;
  }

  public async matches(req: Request, res: Response) {
    const matches = await this.facade.matches(
      req.query.partner?.toString() || "kambi",
      req.query.filter?.toString() || ""
    );

    res.status(200).json({ matches });
  }

  public async match(req: Request, res: Response) {
    const match = await this.facade.match(
      req.query.partner?.toString() || "kambi",
      req.params.matchId
    );

    res.status(200).json({ match });
  }
}

export default MatchPresenter;
