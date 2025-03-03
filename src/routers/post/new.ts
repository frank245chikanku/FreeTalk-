import { Router,  Request,  Response, NextFunction } from "express";  

import post from '../../models/post'
import  { BadRequestError  } from '../../../common' 


const router = Router() 

router.post('/api/post/new', async (req: Request, res: Response, next: NextFunction) => {
    const {title, content } = req.body; 

    if(!title || !content) {
        const error = new BadRequestError('title and content are required!') 
    }

    const newPost = new post ({
        title, 
        content

    }); 
    await newPost.save() 
    res.status(201).send(newPost)
})
export { router as newPostRouter}