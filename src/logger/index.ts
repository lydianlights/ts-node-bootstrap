import { createLogger, transports, format } from 'winston';

const LOG_LEVELS = ['error', 'warn', 'info', 'verbose', 'debug', 'silly'];
export const logger = createLogger({
  level: 'info',
  format: format.printf((info) => info.message),
  transports: [
    new transports.Console(),
  ],
});

if (process.env.LOG_LEVEL && LOG_LEVELS.includes(process.env.LOG_LEVEL)) {
  logger.level = process.env.LOG_LEVEL;
} else if (process.env.NODE_ENV === 'development') {
  logger.level = 'debug';
}
