import { Router } from "express";
import { container } from "tsyringe";

import AuthMiddleware from "./communication/middlewares/AuthMiddleware";
import CashPresenter from "./communication/presenters/CashPresenter";
import DepositPresenter from "./communication/presenters/DepositPresenter";
import LoginPresenter from "./communication/presenters/LoginPresenter";
import LogoutPresenter from "./communication/presenters/LogoutPresenter";
import MatchPresenter from "./communication/presenters/MatchPresenter";
import MePresenter from "./communication/presenters/MePresenter";
import RegisterPresenter from "./communication/presenters/RegisterPresenter";
import {
  betValidator,
  depositValidator,
  favoriteValidator,
  loginValidator,
  registerValidator,
  validateRoute
} from "./communication/validators/validators";

const authMiddleware = container.resolve(AuthMiddleware);
const registerPresenter = container.resolve(RegisterPresenter);
const loginPresenter = container.resolve(LoginPresenter);
const logoutPresenter = container.resolve(LogoutPresenter);
const mePresenter = container.resolve(MePresenter);
const cashPresenter = container.resolve(CashPresenter);
const matchPresenter = container.resolve(MatchPresenter);
const depositPresenter = container.resolve(DepositPresenter);

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

routes.get(
  "/cash",
  authMiddleware.verify,
  async (req, res) => await cashPresenter.cash(req, res)
);

routes.post(
  "/deposit",
  depositValidator,
  authMiddleware.verify,
  validateRoute(async (req, res) => await depositPresenter.deposit(req, res))
);

routes.post(
  "/bet",
  betValidator,
  authMiddleware.verify,
  validateRoute(async (req, res) => await matchPresenter.bet(req, res))
);

routes.post(
  "/favorite",
  favoriteValidator,
  authMiddleware.verify,
  validateRoute(async (req, res) => await matchPresenter.favorite(req, res))
);

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

export default routes;
