import { Request, Response } from "express";

import UserFields from "../../business/entities/UserFields";
import Facade from "../../business/facade/Facade";

class RegisterPresenter {
  private facade;

  constructor(facade: Facade) {
    this.facade = facade;
  }

  public register(req: Request, res: Response) {
    const userFields = new UserFields(
      req.body.username,
      req.body.password,
      req.body.email,
      req.body.cpf
    );
    this.facade.register(userFields);
    res.status(203);
  }
}
export default new RegisterPresenter();
