const GenericError = require("./GenericError");

module.exports = class MissingBodyPropertyError extends GenericError {
  constructor(parameterName) {
    super(
      `Required request body property (${parameterName}) was not included or was null`,
      400,
      40001
    );
  }
};
