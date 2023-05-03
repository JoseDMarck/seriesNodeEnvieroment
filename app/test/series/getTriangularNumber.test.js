import { describe, expect, it } from "vitest";
const Series = require("../../classes/Series");

let serie = new Series();
describe("getTriangularNumber", () => {
	// 1- El numero debe de ser mayor que cero
	it("test_input_must_be_greather_than_zero", () => {
		expect(() => serie.getTriangularNumber(0)).toThrowError(
			"El número debe de ser mayor a 0"
		);
		expect(() => serie.getTriangularNumber(-2)).toThrowError(
			"El número debe de ser mayor a 0"
		);
	});

	//2- El numero debe de ser un numero entero
	it("test_input_must_be_integer_number", () => {
		expect(() => serie.getTriangularNumber(2.5)).toThrowError(
			"El número debe de ser un entero"
		);
		expect(() => serie.getTriangularNumber(3.14)).toThrowError(
			"El número debe de ser un entero"
		);
		expect(() => serie.getTriangularNumber(7.8)).toThrowError(
			"El número debe de ser un entero"
		);
	});

	//3- Si el numero es null o indefined
	it("test_input_it_must_no_be_null_undefined", () => {
		expect(() => serie.getTriangularNumber(null)).toThrowError(
			"El número no debe de ser null o indefinido"
		);

		expect(() => serie.getTriangularNumber(undefined)).toThrowError(
			"El número no debe de ser null o indefinido"
		);
	});

	//4- El numero no debe de ser boolean
	it("test_input_it_must_no_be_boolean", () => {
		expect(() => serie.getTriangularNumber(true)).toThrowError(
			"El número debe de ser tipo númerico"
		);
		expect(() => serie.getTriangularNumber(false)).toThrowError(
			"El número debe de ser tipo númerico"
		);
	});

	//5- El número no debe de ser string
	it("test_input_it_must_no_be_string", () => {
		expect(() => serie.getPrimeNumber("test")).toThrowError(
			"El número debe de ser tipo númerico"
		);
		expect(() => serie.getPrimeNumber("8")).toThrowError(
			"El número debe de ser tipo númerico"
		);
	});

	//6- El número debe de regresar un numero triangular positivo
	it("test_input_return_triangle_number", () => {
		expect(serie.getTriangularNumber(5)).toBe(15);
		expect(serie.getTriangularNumber(10)).toBe(55);
		expect(serie.getTriangularNumber(4)).toBe(10);
	});
});
