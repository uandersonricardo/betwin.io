import { Request, Response } from "express";
import { body, validationResult } from "express-validator";

export const validateRoute = (
  callback: (req: Request, res: Response) => Promise<void>
) => {
  return async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    await callback(req, res);
  };
};

export const registerValidator = [
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
];

export const loginValidator = [
  body("username").notEmpty().withMessage("O campo nome é obrigatório"),
  body("password").notEmpty().withMessage("O campo senha é obrigatório")
];

export const depositValidator = [
  body("method").notEmpty().withMessage("Escolher o método é obrigatório"),
  body("value")
    .notEmpty()
    .withMessage("Definir o valor é obrigatório")
    .isNumeric()
    .withMessage("O campo deve ser preenchido com números apenas")
    .custom(value => {
      return value >= 1.0;
    })
    .withMessage("O valor mínimo de depósito é de 1.00")
];

export const betValidator = [
  body("matchId")
    .notEmpty()
    .withMessage("É necessário escolher um jogo para apostar"),
  body("oddId")
    .notEmpty()
    .withMessage("É necessario escolher a opção de aposta"),
  body("oddValue")
    .notEmpty()
    .withMessage("É necessario escolher a cotação da aposta"),
  body("value")
    .notEmpty()
    .withMessage("Definir o valor é obrigatório")
    .isNumeric()
    .withMessage("O campo deve ser preenchido com números apenas")
    .custom(value => {
      return value >= 0.5;
    })
    .withMessage("O valor mínimo de aposta é de 0.50")
];

export const favoriteValidator = [
  body("matchId")
    .notEmpty()
    .withMessage("É necessário escolher um jogo para favoritar")
];
