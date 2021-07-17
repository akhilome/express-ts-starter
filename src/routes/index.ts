import { Response, Router } from 'express';
import demo from './demo.route';
import { SuccessResponseObject } from '../common';

const r = Router();

r.use('/demo', demo);

r.get('/', (_, res: Response): void => {
  res.json(new SuccessResponseObject('typescript express boilerplate 🔥'));
});

export default r;
