import { NextFunction, Request, Response, Router } from "express";

import post from '../../models/post'

const router = Router()  

router.post('/api/postupdate/:id', async (req: Request, res: Response, next: NextFunction) => {

const { id } = req.params;  

const { content, title } = req.body; 

if(!id) {
    const error = new Error('post id is required') as CustomError 
    error.status = 400  
    next(error)
}

 let updatedPost;
try {

    const updatePost = await post.findOneAndUpdate(
        {_id:id }, 
        {$set: { content, title } }, 
        { new: true }
    )

 } catch(err) {
 const  error = new Error ('post cannot be updated!') as CustomError 
 error.status =  400;   
 next(error)


    }

    res.status(200).send(updatedPost)
})



export { router as updatePostRouter}