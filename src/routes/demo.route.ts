import { Response, Router } from 'express';

const r = Router();

r.get('/', (_, res: Response): void => {
  res.json({
    success: true,
    message: 'demo path live 🚀',
    data: null,
  });
});

export default r;
