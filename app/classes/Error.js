export default class ErrorHandler {
	static throwError(errorType) {
		let errorMessages = {
			INPUT_MUST_BE_INTEGER: "El número de entrada debe de ser un entero",
			INPUT_MUST_BE_GREATER_THAN_ZERO: "El número  debe de ser mayor a 0",
			INPUT_MUST_NUMERICAL_TYPE: "El número debe de ser tipo númerico",
			INPUT_MUST_PRIMAL_NUMBER: "El número debe de ser un número primo",
		};

		if (errorType in errorMessages) {
			throw new Error(errorMessages[errorType]);
		} else {
			throw new Error("Se ha presentado un error no registrado");
		}
	}
}
