// Custom error handler (Express already has a built-in error-handler)

const errorHandlerMiddleware = (err, req, res, next) => {
  res.status(500).json({ msg: err });
};

module.exports = errorHandlerMiddleware;
