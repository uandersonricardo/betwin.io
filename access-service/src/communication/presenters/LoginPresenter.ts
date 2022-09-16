import { Request, Response } from "express";
import { injectable } from "tsyringe";

import Facade from "../../model/facades/Facade";

@injectable()
class LoginPresenter {
  private facade;

  constructor(facade: Facade) {
    this.facade = facade;
  }

  public async login(req: Request, res: Response) {
    const user = await this.facade.login(req.body.username, req.body.password);

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const token = await this.facade.registerSession(user.getId());

    res.status(200).json({ user, token });
  }
}

export default LoginPresenter;
