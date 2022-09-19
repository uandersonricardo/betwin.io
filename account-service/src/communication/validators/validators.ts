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

export const accountValidator = [
  body("userId")
    .notEmpty()
    .withMessage("É necessário escolher um usuário para criar a conta")
];
