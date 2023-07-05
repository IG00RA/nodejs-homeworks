const httpMessages = require("../constants/httpMessages");

const HttpError = (
  statusCode = 500,
  message = httpMessages[statusCode] || httpMessages.default
) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
};

module.exports = HttpError;
