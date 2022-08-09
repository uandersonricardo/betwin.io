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
    const user = this.facade.login(req.body.username, req.body.password);

    if (!user) {
      throw new Error("Invalid credentials");
    }

    this.facade.registerSession(user);

    res.status(200).json(user);
  }
}

export default LoginPresenter;
