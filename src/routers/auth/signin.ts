import { Router, Request, Response, NextFunction } from 'express';  
import { user } from '../../models/user';  



const router = Router();  

router.post('/signin', async (req: Request, res: Response, next: NextFunction) => {  
    const { email, password } = req.body; 

    const existingUser = await user.findOne({ email });  
    if (!existingUser) return next(new Error('wrong credentials'));  

  


});  

export { router as signinRouter };
