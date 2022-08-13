import { Request, Response } from "express";
import { injectable } from "tsyringe";

import Facade from "../../business/facades/Facade";

@injectable()
class CashPresenter {
  private facade;

  constructor(facade: Facade) {
    this.facade = facade;
  }

  public async cash(req: Request, res: Response) {
    const cash = await this.facade.cash(req.params.authenticatedUserId);

    res.status(200).json({ cash });
  }
}

export default CashPresenter;
