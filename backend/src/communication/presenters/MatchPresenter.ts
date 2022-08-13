import { Request, Response } from "express";
import { injectable } from "tsyringe";

import Facade from "../../business/facades/Facade";

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

  public async bet(req: Request, res: Response) {
    await this.facade.bet(
      req.body.user,
      req.body.match,
      req.body.odd,
      req.body.value
    );
    res.status(201);
  }

  public async favorite(req: Request, res: Response) {
    await this.facade.favorite(req.body.user, req.body.match);
    res.status(201);
  }
}

export default MatchPresenter;
