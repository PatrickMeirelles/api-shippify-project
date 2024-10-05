import  { Router } from 'express';

const router = Router();

router.get('/', (_, res: any) => {
    return res.send('first commit, all set')
})


export { router }