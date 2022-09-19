import { Router } from "express";
import { container } from "tsyringe";

import HealthChecker from "./communication/checkers/HealthChecker";
import AuthMiddleware from "./communication/middlewares/AuthMiddleware";
import MatchPresenter from "./communication/presenters/MatchPresenter";

const authMiddleware = container.resolve(AuthMiddleware);
const healthChecker = container.resolve(HealthChecker);
const matchPresenter = container.resolve(MatchPresenter);

const routes = Router();

routes.get(
  "/matches",
  authMiddleware.verify,
  async (req, res) => await matchPresenter.matches(req, res)
);

routes.get(
  "/matches/:matchId",
  authMiddleware.verify,
  async (req, res) => await matchPresenter.match(req, res)
);

routes.get("/health", async (req, res) => await healthChecker.status(req, res));

export default routes;
