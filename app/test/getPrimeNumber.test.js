import { describe, expect, it } from "vitest";

const getPrimeNumber = (number) => {
	if (number <= 1) return false;
	if (!Number.isInteger(number)) return false;
	for (let i = 2; i < number; i++) {
		if (number % i === 0) return false;
	}
	return number;
};

describe("getPrimeNumber", () => {
	// 1- Si el número introducido es menor o igial a 1 regresa Falso
	it("test_zero_or_one_returns_false", () => {
		expect(getPrimeNumber(0)).toBe(false);
		expect(getPrimeNumber(1)).toBe(false);
	});

	// 2- Si se introduce un numero negativo regresa Falso
	it("test_negative_number_returns_false", () => {
		expect(getPrimeNumber(-2)).toBe(false);
		expect(getPrimeNumber(-5)).toBe(false);
		expect(getPrimeNumber(-10)).toBe(false);
	});

	//3- Si se introduce un numero con decimal regresa Falso
	it("test_decimal_number_returns_false", () => {
		expect(getPrimeNumber(2.5)).toBe(false);
		expect(getPrimeNumber(3.14)).toBe(false);
		expect(getPrimeNumber(7.8)).toBe(false);
	});

	//4- Regresar un numero entero si es numero primo.
	it("test_prime_number_returns_number", () => {
		expect(getPrimeNumber(2)).toBe(2);
		expect(getPrimeNumber(3)).toBe(3);
		expect(getPrimeNumber(5)).toBe(5);
		expect(getPrimeNumber(7)).toBe(7);
	});

	//5- Test para los tipos de entradas
	it("test_invalid_input_types_return_false", () => {
		expect(getPrimeNumber("test")).toBe(false);
		expect(getPrimeNumber(true)).toBe(false);
		expect(getPrimeNumber(null)).toBe(false);
	});
});
