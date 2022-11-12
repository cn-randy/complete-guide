/**
 * All
 * errors
 * that
 * come
 * through
 * here
 * are
 * operational
 * errors
 */
const { isEmpty } = require("./functions");

class AppError extends Error {
  /**
   ** There are two types of errors.
   *?    Operational
   **    These are anticipated errors such as page not found, incorrect
   **    login credentials, validation errors etc.
   *?    Unknown server errors
   **    These are unanticipated errors such as app logic or codding errors,
   **    server offline etc.
   *
   * @param message     - The
   *     error
   *     message
   *     or
   *     a
   *     string
   *     of
   *     error
   *     messages
   *     if
   *     this error encapsulates multiple errors
   * @param statusCode  - 400
   *     to
   *     499
   *     Anticipated
   *     operational
   *     errors
   *                      600
   *     to
   *     599
   *     Unkown
   *     and
   *     unanticipated
   *     error
   * @param [errors]    - An
   *     array
   *     of
   *     errors
   *     if
   *     this
   *     error
   *     encapsulates
   *     multiple
   *     errors
   *     such as form or database validation errors.
   */
  constructor(message, statusCode = 500, errors = {}) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    if (!isEmpty(errors)) {
      this.errors = {
        value: "",
        msg: message,
        param: "client",
        location: "mongodb",
      };
    }

    // Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
