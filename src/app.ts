import express, { Response } from 'express';
import helmet from 'helmet';

import routes from './routes';

const app = express();

app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true, limit: '100mb' }));
app.use(helmet());

app.use('/', routes);

// default catch all handler
app.all('*', (_, res: Response): void => {
  res.status(404).json({
    success: false,
    message: 'route not defined',
    data: null,
  });
});

export default app;
