import { Request, Response } from "express";
import { injectable } from "tsyringe";

import Facade from "../../model/facades/Facade";

@injectable()
class DepositNotifier {
  private facade;

  constructor(facade: Facade) {
    this.facade = facade;
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

export default DepositNotifier;
