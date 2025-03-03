import { Router, Request, Response, NextFunction } from 'express';
import { user, IUser } from '../../models/user'; 
import { authenticationService } from '../../../common';
import jwt from 'jsonwebtoken';

const router = Router();

router.post('/signup', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return next(new Error('Email and password are required'));
        }

        
        const existingUser = await user.findOne({ email });

        if (existingUser) {
            return next(new Error('User with this email already exists'));
        }

        
        const hashedPassword = await authenticationService.hashPassword(password);

        
        const newUser = new user({ email, password: hashedPassword });
        await newUser.save();

        
        const token = jwt.sign(
            { email, userId: newUser._id },  
            process.env.JWT_KEY!,
            { expiresIn: "1h" } 
        );

        
        req.session = { jwt: token };

        res.status(201).json({ message: 'User registered successfully', token, user: newUser });

    } catch (error) {
        next(error);
    }
});

export { router as signupRouter };
