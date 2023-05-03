const errorMessages = require("../utils/error_messages");
class ErrorHandler {
	static throwError(errorType) {
		if (errorType in errorMessages) {
			throw new Error(errorMessages[errorType]);
		} else {
			throw new Error(`Se ha presentado un error no registrado`);
		}
	}

	static validateIsCorrectNumber(type, number) {
		switch (type) {
			case "primeNumber":
				if (number === null || number === undefined)
					ErrorHandler.throwError("INPUT_MUST_BE_NOT_NULL");

				if (typeof number !== "number")
					ErrorHandler.throwError("INPUT_MUST_NUMERICAL_TYPE");

				if (!Number.isInteger(number))
					ErrorHandler.throwError("INPUT_MUST_BE_INTEGER");

				if (number <= 1)
					ErrorHandler.throwError(
						"INPUT_MUST_BE_GREATER_THAN_ZERO_AND_ONE"
					);
				break;

			case "triangleNumber":
				if (number === null || number === undefined)
					ErrorHandler.throwError("INPUT_MUST_BE_NOT_NULL");

				if (typeof number !== "number")
					ErrorHandler.throwError("INPUT_MUST_NUMERICAL_TYPE");

				if (!Number.isInteger(number))
					ErrorHandler.throwError("INPUT_MUST_BE_INTEGER");

				if (number < 1)
					ErrorHandler.throwError("INPUT_MUST_BE_GREATER_THAN_ZERO");
				break;

			case "fibonacciNumber":
				if (number === null || number === undefined)
					ErrorHandler.throwError("INPUT_MUST_BE_NOT_NULL");

				if (typeof number !== "number")
					ErrorHandler.throwError("INPUT_MUST_NUMERICAL_TYPE");

				if (!Number.isInteger(number))
					ErrorHandler.throwError("INPUT_MUST_BE_INTEGER");

				if (number < 1)
					ErrorHandler.throwError("INPUT_MUST_BE_GREATER_THAN_ZERO");
				break;

			case "IntegerValidNumber":
				if (
					number === null ||
					number === undefined ||
					typeof number !== "number" ||
					!Number.isInteger(number)
				)
					ErrorHandler.throwError("INPUT_MUST_BE_VALID_NUMBER");

				if (number < 1)
					ErrorHandler.throwError("INPUT_MUST_BE_GREATER_THAN_ZERO");

			default:
		}
	}
}

module.exports = ErrorHandler;
