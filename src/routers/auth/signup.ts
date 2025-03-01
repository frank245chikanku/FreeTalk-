import { Router, Request, Response } from 'express';
import { user as User } from '../../models/user'; 
const router = Router();

router.post('/signup', async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ message: 'Email and password are required' });
            return;
        }

        
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            res.status(400).json({ message: 'User with the same email already exists' });
            return;
        }

        
        const newUser = new User({ email, password });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully', user: newUser });

    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export {router as signupRouter}
