import { Response, Router } from 'express';
import { SuccessResponseObject } from '../common';

const r = Router();

r.get('/', (_, res: Response) => res.json(new SuccessResponseObject('demo path live 🚀')));

export default r;
