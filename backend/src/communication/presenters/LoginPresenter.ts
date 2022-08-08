import { Request, Response } from "express";
import { injectable } from "tsyringe";

import Facade from "../../business/facades/Facade";

@injectable()
class LoginPresenter {
  private facade;

  constructor(facade: Facade) {
    this.facade = facade;
  }

  public login(req: Request, res: Response) {
    this.facade.login(req.body.username, req.body.password);
    // Lack the user parameter
    this.facade.registersession();
    res.status(203);
  }
}

export default LoginPresenter;