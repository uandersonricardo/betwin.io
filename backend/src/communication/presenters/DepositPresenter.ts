import { Request, Response } from "express";
import { injectable } from "tsyringe";

import Facade from "../../business/facades/Facade";

@injectable()
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

export default DepositPresenter;
