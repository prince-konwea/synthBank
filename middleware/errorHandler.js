import winston from "winston";

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ]
  });

export const errorHandler = (err, req, res, next) => {
    logger.error(`Unhandled error: ${err.stack}`);
    res.status(500).json({ error: "Something went wrong" });
};