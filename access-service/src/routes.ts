import { Router } from "express";
import { container } from "tsyringe";

import HealthChecker from "./communication/checkers/HealthChecker";
import AuthMiddleware from "./communication/middlewares/AuthMiddleware";
import LoginPresenter from "./communication/presenters/LoginPresenter";
import LogoutPresenter from "./communication/presenters/LogoutPresenter";
import MePresenter from "./communication/presenters/MePresenter";
import RegisterPresenter from "./communication/presenters/RegisterPresenter";
import {
  loginValidator,
  registerValidator,
  validateRoute
} from "./communication/validators/validators";

const authMiddleware = container.resolve(AuthMiddleware);
const healthChecker = container.resolve(HealthChecker);
const registerPresenter = container.resolve(RegisterPresenter);
const loginPresenter = container.resolve(LoginPresenter);
const logoutPresenter = container.resolve(LogoutPresenter);
const mePresenter = container.resolve(MePresenter);

const routes = Router();

routes.post(
  "/register",
  registerValidator,
  validateRoute(async (req, res) => await registerPresenter.register(req, res))
);

routes.post(
  "/login",
  loginValidator,
  validateRoute(async (req, res) => await loginPresenter.login(req, res))
);

routes.post(
  "/logout",
  async (req, res) => await logoutPresenter.logout(req, res)
);

routes.get(
  "/me",
  authMiddleware.verify,
  async (req, res) => await mePresenter.me(req, res)
);

routes.get("/health", async (req, res) => await healthChecker.status(req, res));

export default routes;
