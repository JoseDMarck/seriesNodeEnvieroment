import { describe, expect, it } from "vitest";
const ErrorHandler = require("../../classes/ErrorHandler");

describe("errorHandler", () => {
	// 1- Muestra los mensajes de error dependiendo del input
	it("test_throw_error_with_valid_error_type", () => {
		expect(() =>
			ErrorHandler.throwError("INPUT_MUST_BE_INTEGER")
		).toThrowError("El número debe de ser un entero");

		expect(() =>
			ErrorHandler.throwError("INPUT_MUST_BE_GREATER_THAN_ZERO")
		).toThrowError("El número debe de ser mayor a 0");
		expect(() =>
			ErrorHandler.throwError("INPUT_MUST_NUMERICAL_TYPE")
		).toThrowError("El número debe de ser tipo númerico");
		expect(() =>
			ErrorHandler.throwError("INPUT_MUST_PRIMAL_NUMBER")
		).toThrowError("El número debe de ser un número primo");
	});

	// 2- Si el error no esta registrado manda mensaje por defecto
	it("test_throw_error_with_valid_error_type", () => {
		expect(() => ErrorHandler.throwError("other")).toThrowError(
			"Se ha presentado un error no registrado"
		);
		expect(() => ErrorHandler.throwError(null)).toThrowError(
			"Se ha presentado un error no registrado"
		);
		expect(() => ErrorHandler.throwError(1213)).toThrowError(
			"Se ha presentado un error no registrado"
		);
	});
});
