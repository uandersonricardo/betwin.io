import { Request, Response } from "express";
import { injectable } from "tsyringe";

import Facade from "../../business/facades/Facade";

@injectable()
class TransactionPresenter {
  private facade;

  constructor(facade: Facade) {
    this.facade = facade;
  }

  public async transactions(req: Request, res: Response) {
    const transactions = await this.facade.transactions(
      req.params.authenticatedUserId
    );

    res.status(200).json({ transactions });
  }
}

export default TransactionPresenter;
