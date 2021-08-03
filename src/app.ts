import express, { Response } from 'express';
import helmet from 'helmet';
import PinoHttp from 'pino-http';
import { ErrorResponseObject, logger } from './common';

import routes from './routes';

const app = express();

app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true, limit: '100mb' }));
app.use(helmet());
app.use(PinoHttp({ logger }));

app.use('/', routes);

// default catch all handler
app.all('*', (_, res: Response): void => {
  res.status(404).json(new ErrorResponseObject('route not defined'));
});

export default app;
