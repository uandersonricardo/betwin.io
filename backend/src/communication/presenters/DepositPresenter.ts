import { Request, Response } from "express";
import { injectable } from "tsyringe";

import Facade from "../../business/facades/Facade";

@injectable()
class DepositPresenter {
  private facade;

  constructor(facade: Facade) {
    this.facade = facade;
  }

  public async deposit(req: Request, res: Response) {
    const url = await this.facade.createTransactionDeposit(
      req.body.method,
      req.body.value,
      req.params.authenticatedUserId
    );

    res.status(201).json({ url });
  }
}

export default DepositPresenter;
