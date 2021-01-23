import http from 'http';

import app from './app';
import { env } from './config';
import logger from './utils/logger';

process.on('rejectionHandled', () => null); // so node stops dumping rejectionHandled messages to stdout
process.on('unhandledRejection', (_, promise) => {
  logger.console('Haha, unhandled promise rejection go brrr...');
  promise.catch((e) => {
    // do proper rejected promise handling here
    logger.console(e);
  });
});

const server = http.createServer(app);

server.listen(env.port);
server.on('listening', () => logger.console(`server running on port ${env.port}`));
