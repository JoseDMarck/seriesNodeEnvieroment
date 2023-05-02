import { describe, expect, it } from "vitest";
const Series = require("../classes/Series");

let serie = new Series();

describe("getPrimeNumber", () => {
	// 1- Si el número introducido es menor o igial a 1 regresa Falso
	it("test_zero_or_one_returns_false", () => {
		expect(serie.getPrimeNumber(1)).toBe(false);
		expect(serie.getPrimeNumber(0)).toBe(false);
	});

	// 2- Si se introduce un numero negativo regresa Falso
	it("test_negative_number_returns_false", () => {
		expect(serie.getPrimeNumber(-2)).toBe(false);
		expect(serie.getPrimeNumber(-5)).toBe(false);
		expect(serie.getPrimeNumber(-10)).toBe(false);
	});

	//3- Si se introduce un numero con decimal regresa Falso
	it("test_decimal_number_returns_false", () => {
		expect(serie.getPrimeNumber(2.5)).toBe(false);
		expect(serie.getPrimeNumber(3.14)).toBe(false);
		expect(serie.getPrimeNumber(7.8)).toBe(false);
	});

	//4- Regresar un numero entero si es numero primo.
	it("test_prime_number_returns_number", () => {
		expect(serie.getPrimeNumber(2)).toBe(2);
		expect(serie.getPrimeNumber(3)).toBe(3);
		expect(serie.getPrimeNumber(5)).toBe(5);
		expect(serie.getPrimeNumber(7)).toBe(7);
	});

	//5- Test para los tipos de entradas
	it("test_invalid_input_types_return_false", () => {
		expect(serie.getPrimeNumber("test")).toBe(false);
		expect(serie.getPrimeNumber(true)).toBe(false);
		expect(serie.getPrimeNumber(null)).toBe(false);
	});
});
