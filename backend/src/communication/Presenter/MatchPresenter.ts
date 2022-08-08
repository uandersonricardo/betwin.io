import { Request, Response } from "express";

import Facade from "../../business/facade/Facade";

class MatchPresenter {
  private facade;

  constructor(facade: Facade) {
    this.facade = facade;
  }

  public bet(req: Request, res: Response) {
    this.facade.bet(
      req.body.user,
      req.body.match,
      req.body.odd,
      req.body.value
    );
    res.status(203);
  }

  public favorite(req: Request, res: Response) {
    this.facade.favorite(req.body.user, req.body.match);
    res.status(203);
  }
}
export default new MatchPresenter();
