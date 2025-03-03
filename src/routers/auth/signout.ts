import { Router, Response, NextFunction, Request } from 'express'   


const router = Router() 

router.post('/signout', async (req: Request,  res: Response, next: NextFunction) => {
    const session = null 
    res.send({})
})

export { router as signoutRouter}