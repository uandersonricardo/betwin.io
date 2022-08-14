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

  public async event(req: Request, res: Response) {
    if (req.body.type === "payment") {
      await this.facade.handleDepositEvent(
        "mercadopago",
        req.body.data.id.toString()
      );
    }

    res.status(200).json();
  }
}

export default DepositPresenter;
