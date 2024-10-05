import  { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (_, res: any) => {
    return res.send('first commit, all set')
})

router.post('/drivers', (req, res: any) => {
    console.log(req.body);
    
    return res.status(StatusCodes.ACCEPTED).send(req.body)
})


export { router }