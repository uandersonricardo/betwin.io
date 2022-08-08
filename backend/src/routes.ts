import { Router } from "express";
import { container, delay } from "tsyringe";

import DepositPresenter from "./communication/presenters/DepositPresenter";
import LoginPresenter from "./communication/presenters/LoginPresenter";
import MatchPresenter from "./communication/presenters/MatchPresenter";
import RegisterPresenter from "./communication/presenters/RegisterPresenter";

const registerPresenter = container.resolve(RegisterPresenter);
const loginPresenter = container.resolve(LoginPresenter);
const matchPresenter = container.resolve(MatchPresenter);
const depositPresenter = container.resolve(DepositPresenter);

const routes = Router();

routes.post("/register", (req, res) => registerPresenter.register(req, res));
routes.get("/login", (req, res) => loginPresenter.login(req, res));
routes.get("/deposit", (req, res) => depositPresenter.deposit(req, res));
routes.get("/bet", (req, res) => matchPresenter.bet(req, res));
routes.get("/favorite", (req, res) => matchPresenter.favorite(req, res));

export default routes;
