import { Request, Response } from "express";
import { injectable } from "tsyringe";

@injectable()
class LogoutPresenter {
  public async logout(req: Request, res: Response) {
    res.status(200).json();
  }
}

export default LogoutPresenter;
