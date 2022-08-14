import { Request, Response } from "express";
import { injectable } from "tsyringe";

@injectable()
class LogoutPresenter {
  public async logout(req: Request, res: Response) {
    res.clearCookie("access-token", { httpOnly: true, path: "/" });

    res.status(200).json();
  }
}

export default LogoutPresenter;