const errorMessages = require("../utils/error_messages");
class ErrorHandler {
	static throwError(errorType) {
		if (errorType in errorMessages) {
			throw new Error(errorMessages[errorType]);
		} else {
			throw new Error("Se ha presentado un error no registrado");
		}
	}
}

module.exports = ErrorHandler;
