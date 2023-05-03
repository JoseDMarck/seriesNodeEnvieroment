import { describe, expect, it } from "vitest";
const Series = require("../../classes/Series");

let serie = new Series();

describe("getPrimeNumber", () => {
	// 1- El numero debe de ser mayor que cero y uno
	it("test_input_must_be_greather_than_zero_and_one", () => {
		expect(() => serie.getPrimeNumber(0)).toThrowError(
			"El número debe de ser mayor a 0 y 1"
		);
		expect(() => serie.getPrimeNumber(1)).toThrowError(
			"El número debe de ser mayor a 0 y 1"
		);
		expect(() => serie.getPrimeNumber(-2)).toThrowError(
			"El número debe de ser mayor a 0 y 1"
		);
		expect(() => serie.getPrimeNumber(-5)).toThrowError(
			"El número debe de ser mayor a 0 y 1"
		);
	});

	//2- El numero debe de ser un numero entero
	it("test_input_must_be_integer_number", () => {
		expect(() => serie.getPrimeNumber(2.5)).toThrowError(
			"El número debe de ser un entero"
		);
		expect(() => serie.getPrimeNumber(3.14)).toThrowError(
			"El número debe de ser un entero"
		);
		expect(() => serie.getPrimeNumber(7.8)).toThrowError(
			"El número debe de ser un entero"
		);
	});

	//3- Regresar un numero entero si es numero primo.
	it("test_input_must_be_prime_number", () => {
		expect(serie.getPrimeNumber(2)).toBe(2);
		expect(serie.getPrimeNumber(3)).toBe(3);
		expect(serie.getPrimeNumber(5)).toBe(5);
		expect(serie.getPrimeNumber(7)).toBe(7);
	});

	//4- Si el numero no es numero primo
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

	//5- Si el numero es null o indefined
	it("test_input_it_must_no_be_null_undefined", () => {
		expect(() => serie.getPrimeNumber(null)).toThrowError(
			"El número no debe de ser null o indefinido"
		);

		expect(() => serie.getPrimeNumber(undefined)).toThrowError(
			"El número no debe de ser null o indefinido"
		);
	});

	//6- Si el numero es boolean
	it("test_input_it_must_no_be_boolean", () => {
		expect(() => serie.getPrimeNumber(true)).toThrowError(
			"El número debe de ser tipo númerico"
		);
		expect(() => serie.getPrimeNumber(false)).toThrowError(
			"El número debe de ser tipo númerico"
		);
	});

	//7- Si el numero es string
	it("test_input_it_must_no_be_string", () => {
		expect(() => serie.getPrimeNumber("test")).toThrowError(
			"El número debe de ser tipo númerico"
		);
		expect(() => serie.getPrimeNumber("8")).toThrowError(
			"El número debe de ser tipo númerico"
		);
	});
});
