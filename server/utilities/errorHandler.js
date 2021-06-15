module.exports = async function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode;
  const errorMessage = err.message;

  res.status(statusCode || 500).send(errorMessage || "Unknown Error");
};
