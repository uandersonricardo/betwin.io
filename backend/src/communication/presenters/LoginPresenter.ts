import { Request, Response } from "express";
import { injectable } from "tsyringe";

import auth from "../../config/auth";
import environment from "../../config/environment";
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

    res.cookie("access-token", token, {
      httpOnly: true,
      maxAge: 1000 * auth.expiresIn,
      sameSite: environment.isProduction ? "none" : "lax",
      path: "/",
      secure: environment.isProduction
    });

    res.status(200).json({ user });
  }
}

export default LoginPresenter;
