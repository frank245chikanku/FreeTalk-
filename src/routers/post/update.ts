import { NextFunction, Request, Response, Router } from "express";

import post from '../../models/post'
import { BadRequestError } from "common";

const router = Router()  

router.post('/api/postupdate/:id', async (req: Request, res: Response, next: NextFunction) => {

const { id } = req.params;  

const { content, title } = req.body; 

if(!id) {
    const error = new BadRequestError('post id is required') 
}

 let updatedPost;
try {

    const updatePost = await post.findOneAndUpdate(
        {_id:id }, 
        {$set: { content, title } }, 
        { new: true }
    )

 } catch(err) {
 const  error = new BadRequestError ('post cannot be updated!') 


    }

    res.status(200).send(updatedPost)
})



export { router as updatePostRouter}