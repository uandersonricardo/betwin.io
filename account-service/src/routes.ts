import { Router } from "express";
import { container } from "tsyringe";

import HealthChecker from "./communication/checkers/HealthChecker";
import AuthMiddleware from "./communication/middlewares/AuthMiddleware";
import DepositNotifier from "./communication/notifiers/DepositNotifier";
import AccountPresenter from "./communication/presenters/AccountPresenter";
import CashPresenter from "./communication/presenters/CashPresenter";
import DepositPresenter from "./communication/presenters/DepositPresenter";
import TransactionPresenter from "./communication/presenters/TransactionPresenter";
import DebitProvider from "./communication/providers/DebitProvider";
import RefoundProvider from "./communication/providers/RefoundProvider";
import {
  depositValidator,
  accountValidator,
  validateRoute
} from "./communication/validators/validators";

const authMiddleware = container.resolve(AuthMiddleware);
const healthChecker = container.resolve(HealthChecker);
const depositNotifier = container.resolve(DepositNotifier);
const accountPresenter = container.resolve(AccountPresenter);
const cashPresenter = container.resolve(CashPresenter);
const depositPresenter = container.resolve(DepositPresenter);
const transactionPresenter = container.resolve(TransactionPresenter);
const debitProvider = container.resolve(DebitProvider);
const refoundProvider = container.resolve(RefoundProvider);

const routes = Router();

routes.post(
  "/account",
  accountValidator,
  validateRoute(async (req, res) => await accountPresenter.account(req, res))
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

routes.get(
  "/transactions",
  authMiddleware.verify,
  async (req, res) => await transactionPresenter.transactions(req, res)
);

routes.post(
  "/deposit/event",
  async (req, res) => await depositNotifier.event(req, res)
);

routes.post("/debit", async (req, res) => await debitProvider.debit(req, res));

routes.post(
  "/refound",
  async (req, res) => await refoundProvider.refound(req, res)
);

routes.get("/health", async (req, res) => await healthChecker.status(req, res));

export default routes;
