import { describe, expect, it } from "vitest";
const Formula = require("../../classes/Formula");
const ErrorHandler = require("../../classes/ErrorHandler");

let formula = new Formula();

describe("resolveFormula", () => {
	it("test_input_is_zero", () => {
		// 1- NUMERO ES (0)
		expect(() => formula.resolveFormula(0)).toThrowError(
			"El número debe de ser mayor a 0"
		);

		// 2- NUMERO ES (1) ==> n_prime: 4 | n_triangle": 0, | n_fibonacci -1
		expect(() => formula.resolveFormula(1)).toThrowError(
			"El número debe de ser un número primo"
		);

		// 3- NUMERO ES (2) ==> n_prime: 5 | n_triangle": 1, | n_fibonacci 0
		expect(() => formula.resolveFormula(2)).toThrowError(
			"El número fibonacci debe de ser mayor a 0"
		);

		// 4- NUMERO ES (3) ==> n_prime: 6 | n_triangle": 2, | n_fibonacci 1
		expect(() => formula.resolveFormula(3)).toThrowError(
			"El número debe de ser un número primo"
		);

		// 5- NUMERO ES (4) ==> n_prime: 7 | n_triangle": 3, | n_fibonacci 2
		expect(formula.resolveFormula(4)).toBe(42);

		// 6- NUMERO ES (5) ==> n_prime: 8 | n_triangle": 4, | n_fibonacci 3
		expect(() => formula.resolveFormula(5)).toThrowError(
			"El número debe de ser un número primo"
		);

		// 7- NUMERO ES (6) ==> n_prime: 9 | n_triangle": 5, | n_fibonacci 4
		expect(() => formula.resolveFormula(6)).toThrowError(
			"El número debe de ser un número primo"
		);

		// 8- NUMERO ES (7) ==> n_prime: 10 | n_triangle": 6, | n_fibonacci 5
		expect(() => formula.resolveFormula(7)).toThrowError(
			"El número debe de ser un número primo"
		);

		// 9- NUMERO ES (8) ==> n_prime:11 | n_triangle": 7, | n_fibonacci 6
		expect(formula.resolveFormula(8)).toBe(38.5);

		// 10- NUMERO ES (9) ==> n_prime: 12 | n_triangle": 8, | n_fibonacci 7
		expect(() => formula.resolveFormula(7)).toThrowError(
			"El número debe de ser un número primo"
		);
	});
});
