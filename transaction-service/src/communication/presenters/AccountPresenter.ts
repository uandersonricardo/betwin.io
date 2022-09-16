import { Request, Response } from "express";
import { injectable } from "tsyringe";

import Facade from "../../model/facades/Facade";

@injectable()
class AccountPresenter {
  private facade;

  constructor(facade: Facade) {
    this.facade = facade;
  }

  public async account(req: Request, res: Response) {
    await this.facade.createAccount(req.body.userId);

    res.status(201).json();
  }
}

export default AccountPresenter;
