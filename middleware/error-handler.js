// Custom error handler (Express already has a built-in error-handler)

const { CustomAPIError } = require("../errors/custom-error");
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    res.status(err.status).json({ msg: err.message });
  }
  return res.status(500).json({ msg: err }); //can also use a custom error message here
};

module.exports = errorHandlerMiddleware;
