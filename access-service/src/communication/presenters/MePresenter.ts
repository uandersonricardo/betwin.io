import { Request, Response } from "express";
import { injectable } from "tsyringe";

import Facade from "../../model/facades/Facade";

@injectable()
class MePresenter {
  private facade;

  constructor(facade: Facade) {
    this.facade = facade;
  }

  public async me(req: Request, res: Response) {
    const user = await this.facade.me(req.params.authenticatedUserId);

    res.status(200).json({ user });
  }
}

export default MePresenter;
