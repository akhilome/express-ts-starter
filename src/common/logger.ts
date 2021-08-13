import pino from 'pino';
import { env } from '../config';

export const logger = pino({
  prettyPrint: !env.isProduction,
  formatters: {
    level: (label) => ({ label }),
  },
});
