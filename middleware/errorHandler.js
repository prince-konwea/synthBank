export const errorHandler = (err, req, res, next) => {
    logger.error(`Unhandled error: ${err.stack}`);
    res.status(500).json({ error: "Something went wrong" });
};