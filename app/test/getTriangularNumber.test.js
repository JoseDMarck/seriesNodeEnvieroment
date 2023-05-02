import { describe, expect, it } from "vitest";
const Series = require("../classes/Series");

let serie = new Series();
describe("getTriangularNumber", () => {
	// Debe de regresar un numero triangular  positivo del número introducido
	it("test_positive_input_returns_triangular_number", () => {
		expect(serie.getTriangularNumber(5)).toBe(15);
	});

	// Lanza un error cuando el numero intorducido es negtivo o 0
	it("test_negative_or_zero_input_throws_error", () => {
		expect(() => serie.getTriangularNumber(0)).toThrowError(
			"El número introducido debe de ser mayor a 0"
		);

		expect(() => serie.getTriangularNumber(-1)).toThrowError(
			"El número introducido debe de ser mayor a 0"
		);
	});

	// Lanza un error cuando el numero introducido no es un numero entero
	it("test_not_integer_input_throws_error", () => {
		expect(() => serie.getTriangularNumber("-5")).toThrowError(
			"El número introducido debe de ser mayor a 0"
		);
	});
});
