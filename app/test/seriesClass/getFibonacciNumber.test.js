import { describe, expect, it } from "vitest";
const Series = require("../../classes/Series");
const ErrorHandler = require("../../classes/ErrorHandler");

let serie = new Series();
describe("getFibonacciNumber", () => {
	// 1- El numero debe de ser mayor que cero
	it("test_input_must_be_greather_than_zero", () => {
		expect(() => serie.getFibonacciNumber(0)).toThrowError(
			"El número fibonacci debe de ser mayor a 0"
		);

		expect(() => serie.getFibonacciNumber(-1)).toThrowError(
			"El número fibonacci debe de ser mayor a 0"
		);
	});

	//2- El numero debe de ser un numero entero
	it("test_input_must_be_integer_number", () => {
		expect(() => serie.getFibonacciNumber(2.5)).toThrowError(
			"El número debe de ser un entero"
		);

		expect(() => serie.getFibonacciNumber(3.14)).toThrowError(
			"El número debe de ser un entero"
		);

		expect(() => serie.getFibonacciNumber(7.8)).toThrowError(
			"El número debe de ser un entero"
		);
	});

	//3- Si el numero es null o indefined
	it("test_input_it_must_no_be_null_undefined", () => {
		expect(() => serie.getFibonacciNumber(null)).toThrowError(
			"El número no debe de ser null o indefinido"
		);

		expect(() => serie.getFibonacciNumber(undefined)).toThrowError(
			"El número no debe de ser null o indefinido"
		);
	});

	//4- El numero no debe de ser boolean
	it("test_input_it_must_no_be_boolean", () => {
		expect(() => serie.getFibonacciNumber(true)).toThrowError(
			"El número debe de ser tipo númerico"
		);

		expect(() => serie.getFibonacciNumber(false)).toThrowError(
			"El número debe de ser tipo númerico"
		);
	});

	//5- El número no debe de ser string
	it("test_input_it_must_no_be_string", () => {
		expect(() => serie.getFibonacciNumber("test")).toThrowError(
			"El número debe de ser tipo númerico"
		);

		expect(() => serie.getFibonacciNumber("8")).toThrowError(
			"El número debe de ser tipo númerico"
		);
	});

	// 3- Debe Regresa un numero fibonacci positivo
	it("test_retun_a_fibonacci_number_positive", () => {
		expect(serie.getFibonacciNumber(10)).toBe(55);
		expect(serie.getFibonacciNumber(4)).toBe(3);
		expect(serie.getFibonacciNumber(7)).toBe(13);
	});
});
