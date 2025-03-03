import { Request, Response, NextFunction } from "express"; 
import jwt from 'jsonwebtoken' 

declare global {
    interface jwtpayload {
        email: string
        password: string
    }
    namespace Express { 
        interface Request{
            currentUser?: jwtpayload
        }
    }
}
export const currentUser = (req: Request,res: Response, next:NextFunction) => {
    if(!req.session?.jwt) {
        return next() 
    }
    try{
        const payload = (jwt.verify(req.session?.jwt, process.env.JWT_KEY!)) as jwtpayload
        req.currentUser = payload; 
        
    }catch(err) {
        return next(err)

    }
    next()
}