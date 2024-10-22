import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const requireAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = (req as any).user;

  if (!user || !user.isAdmin) {
    return res.status(403).json({ message: "Access denied: Admins only" });
  }

  next();
};
