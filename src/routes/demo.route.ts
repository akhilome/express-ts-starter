import { Request, Response, Router } from 'express';

const r = Router();

r.get('/', (req: Request, res: Response): void => {
  res.json({
    success: true,
    message: 'demo path live 🚀',
    data: null,
  });
});

export default r;
