import { Request, Response } from "express";
import { injectable } from "tsyringe";

@injectable()
class HealthChecker {
  public async status(req: Request, res: Response) {
    res.status(200).json();
  }
}

export default HealthChecker;
