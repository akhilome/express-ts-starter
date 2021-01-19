import { Request, Response, Router } from 'express';
import demo from './demo.route';

const r = Router();

r.use('/demo', demo);

r.get('/', (req: Request, res: Response): void => {
  res.json({
    success: true,
    message: 'typescript express boilerplate 🔥',
    data: null,
  });
});

export default r;
