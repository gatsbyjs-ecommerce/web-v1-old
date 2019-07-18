import { createLogger, format, transports } from 'winston';

import config from './config';

const logger = createLogger({
  level: 'info',
  format: format.combine(format.timestamp(), format.metadata(), format.json()),
});

if (config.get('env') !== 'production') {
  logger.add(
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    }),
  );
}

export default logger;
