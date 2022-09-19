import { Request, Response } from "express";
import { injectable } from "tsyringe";

import Facade from "../../model/facades/Facade";

@injectable()
class RefoundProvider {
  private facade;

  constructor(facade: Facade) {
    this.facade = facade;
  }

  public async refound(req: Request, res: Response) {
    await this.facade.refound(req.body.userId, req.body.value);

    res.status(200).json();
  }
}

export default RefoundProvider;
