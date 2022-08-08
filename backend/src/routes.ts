import { Request, Response, Router } from "express";

import DepositPresenter from "./communication/Presenter/DepositPresenter";
import LoginPresenter from "./communication/Presenter/LoginPresenter";
import MatchPresenter from "./communication/Presenter/MatchPresenter";
import RegisterPresenter from "./communication/Presenter/RegisterPresenter";

const routes = Router();

routes.get("/register", RegisterPresenter.register);

routes.get("/login", LoginPresenter.login);

routes.get("/deposit", DepositPresenter.deposit);

routes.get("/bet", MatchPresenter.bet);

routes.get("/favorite", MatchPresenter.favorite);

export default routes;
