import { Router, Response, Request, NextFunction } from 'express';
import post from '../../models/post';

const router = Router();

router.delete('/api/post/delete/:id', async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    if (!id) {
        const error = new Error('Post ID is required') as CustomError;
        error.status = 400;
        return next(error);
    }

    try {
        const deletedPost = await post.findOneAndDelete({ _id: id }); 
        

        if (!deletedPost) {
            const error = new Error('Post not found') as CustomError;
            error.status = 404;
            return next(error);
        }

        res.status(200).json({ success: true, message: 'Post deleted successfully' });
    } catch (err) {
        next(new Error('Post cannot be deleted'));
    }
});

export { router as deletepostRouter };
