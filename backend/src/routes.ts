import { Request, Response, Router } from "express";
import { body, validationResult } from "express-validator";
import { container } from "tsyringe";

import DepositPresenter from "./communication/presenters/DepositPresenter";
import LoginPresenter from "./communication/presenters/LoginPresenter";
import MatchPresenter from "./communication/presenters/MatchPresenter";
import RegisterPresenter from "./communication/presenters/RegisterPresenter";

const registerPresenter = container.resolve(RegisterPresenter);
const loginPresenter = container.resolve(LoginPresenter);
const matchPresenter = container.resolve(MatchPresenter);
const depositPresenter = container.resolve(DepositPresenter);

const routes = Router();

routes.post(
  "/register",
  [
    body("username")
      .notEmpty()
      .withMessage("O campo nome é obrigatório")
      .isAlphanumeric()
      .withMessage("O campo nome deve conter apenas letras e números")
      .isLength({ min: 3 })
      .withMessage("O campo nome deve ter no mínimo 3 caracteres"),
    body("password")
      .notEmpty()
      .withMessage("O campo senha é obrigatório")
      .isLength({ min: 6 })
      .withMessage("O campo senha deve ter no mínimo 6 caracteres")
      .custom(value => {
        return value.match(/^[A-Za-z0-9@_-]+$/);
      })
      .withMessage("O campo tem caracteres inválidos"),
    body("email")
      .notEmpty()
      .withMessage("O campo e-mail é obrigatório")
      .isEmail()
      .withMessage("O campo e-mail deve ser um email válido"),
    body("cpf")
      .notEmpty()
      .withMessage("O campo CPF é obrigatório")
      .isLength({ min: 11, max: 11 })
      .withMessage("O campo CPF deve ter 11 caracteres")
      .custom(value => {
        return value.match(/^[0-9]+$/);
      })
      .withMessage("O campo CPF deve conter apenas números")
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    registerPresenter.register(req, res);
  }
);
routes.post(
  "/login",
  [
    body("username").notEmpty().withMessage("O campo nome é obrigatório"),
    body("password").notEmpty().withMessage("O campo senha é obrigatório")
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    loginPresenter.login(req, res);
  }
);
routes.post(
  "/deposit",
  [
    body("method").notEmpty().withMessage("Escolher o método é obrigatório"),
    body("value")
      .notEmpty()
      .withMessage("Definir o valor é obrigatório")
      .isNumeric()
      .withMessage("O campo deve ser preenchido com números apenas")
      .custom(value => {
        return value >= 5.0;
      })
      .withMessage("O valor mínimo de depósito é de 5.00"),
    body("user")
      .notEmpty()
      .withMessage("É necessario estar logado para fazer um depósito")
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    depositPresenter.deposit(req, res);
  }
);
routes.post(
  "/bet",
  [
    body("user")
      .notEmpty()
      .withMessage("É necessario estar logado para fazer uma aposta"),
    body("match")
      .notEmpty()
      .withMessage("É necessário escolher um jogo para apostar"),
    body("odd")
      .notEmpty()
      .withMessage("É necessario escolher a opção de aposta"),
    body("value")
      .notEmpty()
      .withMessage("Definir o valor é obrigatório")
      .isNumeric()
      .withMessage("O campo deve ser preenchido com números apenas")
      .custom(value => {
        return value >= 1.0;
      })
      .withMessage("O valor mínimo de depósito é de 1.00")
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    matchPresenter.bet(req, res);
  }
);
routes.post(
  "/favorite",
  [
    body("user")
      .notEmpty()
      .withMessage("É necessario estar logado para favoritar uma partida"),
    body("match")
      .notEmpty()
      .withMessage("É necessário escolher um jogo para favoritar")
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    matchPresenter.favorite(req, res);
  }
);

export default routes;
