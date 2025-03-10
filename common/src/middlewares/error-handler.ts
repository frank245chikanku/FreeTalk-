
import { CustomError } from "../errors/custom-error";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({ errors: err.generateError() });
    }

    
    console.error(err);
    return res.status(500).json({ errors: [{ message: 'Something went wrong.' }] });
}