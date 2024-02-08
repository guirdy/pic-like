import { NextFunction, Request, Response } from "express";
import { env } from "src/env";
import jwtService from "jsonwebtoken";

export function checkJwt(req: Request, res: Response, next: NextFunction) {
  const jwt = req.headers["authorization"];
  const secret = env.JWT_SECRET;

  if (!jwt) {
    return res.status(401).json({
      error: 'Unauthorized.'
    })
  }

  const token = jwt.split('Bearer ')[1]

  jwtService.verify(token, secret, (err, _) => {
    if (err) {
      return res.status(401).json({
        error: 'Unauthorized.'
      })
    }

    next();
  });
}
