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
