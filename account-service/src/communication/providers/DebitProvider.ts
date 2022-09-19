import { Request, Response } from "express";
import { injectable } from "tsyringe";

import Facade from "../../model/facades/Facade";

@injectable()
class DebitProvider {
  private facade;

  constructor(facade: Facade) {
    this.facade = facade;
  }

  public async debit(req: Request, res: Response) {
    await this.facade.debit(req.body.userId, req.body.value);

    res.status(200).json();
  }
}

export default DebitProvider;
