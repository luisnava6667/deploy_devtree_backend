import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const handleInpurErrors = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  //Manejar errores de validación
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }
  next();
};

