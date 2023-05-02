import { describe, expect, it } from "vitest";
const Series = require("../classes/Series");

let serie = new Series();
describe("getFibonacciNumber", () => {
	// 1- Si el número introducido es menor o igial a 1 regresa mensaje de error

	it("test_fibonacci_input_number_greater_than_0", () => {
		expect(() => serie.getFibonacciNumber(0)).toThrowError(
			"El número introducido debe de ser mayor a 0"
		);

		expect(() => serie.getFibonacciNumber(-1)).toThrowError(
			"El número introducido debe de ser mayor a 0"
		);
	});

	// 2- Si el número introducido no es Entero regresa mensaje de error

	it("test_not_integer_input_throws_error", () => {
		expect(() => serie.getFibonacciNumber("test")).toThrowError(
			"El número introducido debe de ser tipo númerico"
		);
		expect(() => serie.getFibonacciNumber(null)).toThrowError(
			"El número introducido debe de ser tipo númerico"
		);
		expect(() => serie.getFibonacciNumber(undefined)).toThrowError(
			"El número introducido debe de ser tipo númerico"
		);
		expect(() => serie.getFibonacciNumber({})).toThrowError(
			"El número introducido debe de ser tipo númerico"
		);
		expect(() => serie.getFibonacciNumber([])).toThrowError(
			"El número introducido debe de ser tipo númerico"
		);
		expect(() => serie.getFibonacciNumber(3.14)).toThrowError(
			"El número introducido debe de ser un número entero"
		);
	});

	// 3- Debe Regresa un numero  fibonacci positivo
	it("test_retun_a_fibonacci_number_positive", () => {
		expect(serie.getFibonacciNumber(10)).toBe(55);
		expect(serie.getFibonacciNumber(4)).toBe(3);
		expect(serie.getFibonacciNumber(7)).toBe(13);
	});
});
