import { describe, expect, it } from "vitest";
const Formula = require("../../classes/Formula");
const ErrorHandler = require("../../classes/ErrorHandler");

let formula = new Formula();

describe("DoMathOperations", () => {
	// 1- El numero debe de ser mayor que cero
	it("test_input_must_be_greather_than_zero", () => {
		expect(() =>
			ErrorHandler.validateIsCorrectNumber("IntegerValidNumber", 0)
		).toThrowError("El número debe de ser mayor a 0");

		expect(() =>
			ErrorHandler.validateIsCorrectNumber("IntegerValidNumber", -1)
		).toThrowError("El número debe de ser mayor a 0");
	});

	it("test_input_must_be_valid_number", () => {
		expect(() =>
			ErrorHandler.validateIsCorrectNumber("IntegerValidNumber", {})
		).toThrowError("El número no debe ser un número válido");

		expect(() =>
			ErrorHandler.validateIsCorrectNumber("IntegerValidNumber", null)
		).toThrowError("El número no debe ser un número válido");
	});
});
