import { Router } from "express";
import { container } from "tsyringe";

import HealthChecker from "./communication/checkers/HealthChecker";
import AuthMiddleware from "./communication/middlewares/AuthMiddleware";
import MatchPresenter from "./communication/presenters/MatchPresenter";
import {
  betValidator,
  validateRoute
} from "./communication/validators/validators";

const authMiddleware = container.resolve(AuthMiddleware);
const healthChecker = container.resolve(HealthChecker);
const matchPresenter = container.resolve(MatchPresenter);

const routes = Router();

routes.post(
  "/bet",
  betValidator,
  authMiddleware.verify,
  validateRoute(async (req, res) => await matchPresenter.bet(req, res))
);

routes.get("/health", async (req, res) => await healthChecker.status(req, res));

export default routes;
