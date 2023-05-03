import { describe, expect, it } from "vitest";
const Series = require("../../classes/Series");
const ErrorHandler = require("../../classes/ErrorHandler");

let serie = new Series();

describe("getPrimeNumber", () => {
	// 1- El numero debe de ser mayor que cero y uno
	it("test_input_must_be_greather_than_zero_and_one", () => {
		expect(() =>
			ErrorHandler.validateIsCorrectNumber("primeNumber", 0)
		).toThrowError("El número debe de ser mayor a 0 y 1");

		expect(() =>
			ErrorHandler.validateIsCorrectNumber("primeNumber", 1)
		).toThrowError("El número debe de ser mayor a 0 y 1");

		expect(() =>
			ErrorHandler.validateIsCorrectNumber("primeNumber", -2)
		).toThrowError("El número debe de ser mayor a 0 y 1");
	});

	//2- El numero debe de ser un numero entero
	it("test_input_must_be_integer_number", () => {
		expect(() =>
			ErrorHandler.validateIsCorrectNumber("primeNumber", 2.5)
		).toThrowError("El número debe de ser un entero");

		expect(() =>
			ErrorHandler.validateIsCorrectNumber("primeNumber", 3.14)
		).toThrowError("El número debe de ser un entero");

		expect(() =>
			ErrorHandler.validateIsCorrectNumber("primeNumber", 7.8)
		).toThrowError("El número debe de ser un entero");
	});

	//3- Si el numero es null o indefined
	it("test_input_it_must_no_be_null_undefined", () => {
		expect(() =>
			ErrorHandler.validateIsCorrectNumber("primeNumber", null)
		).toThrowError("El número no debe de ser null o indefinido");

		expect(() =>
			ErrorHandler.validateIsCorrectNumber("primeNumber", undefined)
		).toThrowError("El número no debe de ser null o indefinido");
	});

	//4- El numero no debe de ser boolean
	it("test_input_it_must_no_be_boolean", () => {
		expect(() =>
			ErrorHandler.validateIsCorrectNumber("primeNumber", true)
		).toThrowError("El número debe de ser tipo númerico");

		expect(() =>
			ErrorHandler.validateIsCorrectNumber("primeNumber", false)
		).toThrowError("El número debe de ser tipo númerico");
	});

	//5- El número no debe de ser string
	it("test_input_it_must_no_be_string", () => {
		expect(() =>
			ErrorHandler.validateIsCorrectNumber("primeNumber", "test")
		).toThrowError("El número debe de ser tipo númerico");

		expect(() =>
			ErrorHandler.validateIsCorrectNumber("primeNumber", "8")
		).toThrowError("El número debe de ser tipo númerico");
	});

	//6- Si el numero no es numero primo
	it("test_input_is_not_prime_number", () => {
		expect(() => serie.getPrimeNumber(4)).toThrowError(
			"El número debe de ser un número primo"
		);
		expect(() => serie.getPrimeNumber(6)).toThrowError(
			"El número debe de ser un número primo"
		);
		expect(() => serie.getPrimeNumber(9)).toThrowError(
			"El número debe de ser un número primo"
		);
	});

	//7- Regresar un numero entero si es numero primo.
	it("test_input_must_be_prime_number", () => {
		expect(serie.getPrimeNumber(2)).toBe(2);
		expect(serie.getPrimeNumber(3)).toBe(3);
		expect(serie.getPrimeNumber(5)).toBe(5);
		expect(serie.getPrimeNumber(7)).toBe(7);
	});
});
