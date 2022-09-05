import { Request, Response } from "express";
import { injectable } from "tsyringe";

import Facade from "../../model/facades/Facade";

@injectable()
class RegisterPresenter {
  private facade;

  constructor(facade: Facade) {
    this.facade = facade;
  }

  public async register(req: Request, res: Response) {
    await this.facade.register(
      req.body.username,
      req.body.password,
      req.body.email,
      req.body.cpf
    );

    res.status(201).json();
  }
}

export default RegisterPresenter;
