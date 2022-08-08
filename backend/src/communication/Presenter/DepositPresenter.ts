import { Request, Response } from "express";

import Facade from "../../business/controls/Facade";

class DepositPresenter {
  private facade;

  constructor(facade: Facade) {
    this.facade = facade;
  }

  public deposit(req: Request, res: Response) {
    this.facade.createTransactionDeposit(
      req.body.method,
      req.body.value,
      req.body.user
    );
    res.status(203);
  }
}
export default new DepositPresenter();
