import { Router, Request, Response, NextFunction } from 'express';
import { user, IUser } from '../../models/user'; 
import { authenticationService } from '../../../common';
import jwt from 'jsonwebtoken';

const router = Router();

router.post('/signin', async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    
    const existingUser = await user.findOne({ email });

    if (!existingUser) {
        return next(new Error('Wrong credentials'));
    }

    
    const isEqual = await authenticationService.pwdCompare(existingUser.password, password);

    if (!isEqual) {
        return next(new Error('Wrong credentials'));
    }

    
    const token = jwt.sign(
        { email, userId: existingUser._id },  
        process.env.JWT_KEY!,
        { expiresIn: "1h" } 
    );

    
    req.session = { jwt: token };

    res.status(200).json({ message: 'Signed in successfully', token, user: existingUser });
});

export { router as signinRouter };
