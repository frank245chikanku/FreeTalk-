

import * as dotenv from 'dotenv';
dotenv.config();   

import express, { Request, Response, NextFunction } from 'express';
import { json, urlencoded } from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'
import cookieSession from 'cookie-session';

import {newPostRouter, deletepostRouter, updatePostRouter, showpostRouter, newCommentRouter, deleteCommentRouter} from './routers'




const app = express();

app.use(cors( 
    {
        origin: "*",
        optionsSuccessStatus:200 
    }
))

app.set('trust proxy', true); 

app.use(urlencoded({ extended: false

}));
app.use(json());
app.use(cookieSession({
    signed: false, 
    secure: false,
}))

app.use(newPostRouter)
app.use(deletepostRouter)
app.use(updatePostRouter) 
app.use(showpostRouter) 

app.use(newCommentRouter)  
app.use(deleteCommentRouter)


app.all('*', (req,res, next) => { 
    const error = new Error('not found!') as CustomError; 
    error.status = 404
    next(error)
})


declare global {
    interface CustomError extends Error {
        status?: number;    
    }
}  


app.get('/error', (req: Request, res: Response, next: NextFunction) => {
    const error: CustomError = new Error('This is a test error');
    error.status = 400;  
    next(error);  
});


const errorHandler = (error: CustomError, req: Request, res: Response, next: NextFunction) => {
    if (error.status) {
        return res.status(error.status).json({ message: error.message });
    }
    res.status(500).json({ message: 'Something went wrong' });
};


app.use((error: CustomError, req: Request, res: Response, next: NextFunction) => {
    errorHandler(error, req, res, next);  
});


const start = async () => {
    if (!process.env.MONGO_URI) throw new Error('MONGO_URI is required!');
    if (!process.env.JWT_KEY) throw new Error('JWT_KEY is required!');


    try {
        await mongoose.connect(process.env.MONGO_URI);
    } catch (err) {
        console.error('Database connection error!', err);
        throw new Error('Database connection error!');
    }

    app.listen(8080, () => console.log('Server is up and running on port 8080'));
};

start();
