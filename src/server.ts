import http from 'http';

import app from './app';
import { env } from './config';

const server = http.createServer(app);

server.listen(env.port);
server.on('listening', () => console.log(`server running on port ${env.port}`));
