import { Router, Request, Response, NextFunction } from 'express';
import Comment from '../../models/comment';
import post from '../../models/post';

const router = Router();

router.post('/api/comment/new/:postId', async (req: Request, res: Response, next: NextFunction) => {
    const { userName, content } = req.body;
    const { postId } = req.params;

    if (!content) {
        const error = new Error('content is required') as CustomError;
        error.status = 400;
        return next(error);
    }

    try {
        
        const newComment = new Comment({
            userName: userName || 'anonymous',
            content
        });

        
        await newComment.save();

        
        const updatedPost = await post.findOneAndUpdate(
            { _id: postId },
            { $push: { comments: newComment._id } },
            { new: true }
        );

        res.status(201).send(updatedPost);
    } catch (error) {
        next(error);
    }
});

export { router as newComment };
