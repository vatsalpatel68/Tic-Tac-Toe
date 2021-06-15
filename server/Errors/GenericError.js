module.exports = class GenericError extends Error {
  constructor(message, statusCode = 500, errorCode = 50000) {
    super(message || "Oops. Something unexpected happened");
    this.statusCode = statusCode;
    this.errorCode = errorCode;
  }
};
