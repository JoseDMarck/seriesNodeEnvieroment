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

	// 2- El numero debe de ser un numero valido
	it("test_input_must_be_valid_number", () => {
		expect(() =>
			ErrorHandler.validateIsCorrectNumber("IntegerValidNumber", {})
		).toThrowError("El número no debe ser un número válido");

		expect(() =>
			ErrorHandler.validateIsCorrectNumber("IntegerValidNumber", null)
		).toThrowError("El número no debe ser un número válido");
	});

	// 3- El numero debe de ser un numero entero
	it("test_input_must_be_valid_number", () => {
		expect(() =>
			ErrorHandler.validateIsCorrectNumber("IntegerValidNumber", 3.14)
		).toThrowError("El número debe de ser un entero");
	});

	// 4- El numero debe de regresar el objeto con las pripiedades
	it("test_input_must_return_correct_properties", () => {
		expect(formula.doMathOperations(4)).toHaveProperty("n_prime");
		expect(formula.doMathOperations(4)).toHaveProperty("n_triangle");
		expect(formula.doMathOperations(4)).toHaveProperty("n_fibonacci");
	});

	// 5- El numero debe de regresar los valores correctos
	it("test_input_must_be_return_correct_values", () => {
		const expected_1 = {
			n_prime: 7,
			n_triangle: 3,
			n_fibonacci: 2,
		};
		const expected_2 = {
			n_prime: 13,
			n_triangle: 9,
			n_fibonacci: 8,
		};

		expect(formula.doMathOperations(4)).toEqual(expected_1);
		expect(formula.doMathOperations(10)).toEqual(expected_2);
	});
});
