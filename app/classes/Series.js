class Series {
	constructor(number) {
		this.number = number;
	}

	/* --------------------------------------------------------
	/* ---- NUMERO PRIMO
	-------------------------------------------------------- */

	getPrimeNumber(value) {
		const number = value;
		if (number <= 1) return false;
		if (!Number.isInteger(number)) return false;
		for (let i = 2; i < number; i++) {
			if (number % i === 0) return false;
		}
		return number;
	}

	/* --------------------------------------------------------
	/* ---- NUMERO TRIANGULAR
	-------------------------------------------------------- */

	getTriangularNumber(value) {
		if (value < 1)
			throw new Error("El número introducido debe de ser mayor a 0");

		if (typeof value !== "number")
			throw new Error("El número introducido debe de ser tipo númerico");

		const number = value;
		let tNumber = 0;
		let i = 1;
		while (i <= number) {
			tNumber += i;
			i++;
		}
		return tNumber;
	}

	/* --------------------------------------------------------
	/* ---- NUGMERO FIBONACCI
	-------------------------------------------------------- */

	getFibonacciNumber(value) {
		if (typeof value !== "number")
			throw new Error("El número introducido debe de ser tipo númerico");

		if (value < 1)
			throw new Error("El número introducido debe de ser mayor a 0");

		if (!Number.isInteger(value))
			throw new Error(
				"El número introducido debe de ser un número entero"
			);

		const number = value;
		const fib = [0, 1];
		for (let i = 2; i <= number; i++) {
			fib[i] = fib[i - 2] + fib[i - 1];
		}
		return fib[number];
	}

	/* --------------------------------------------------------
	/* ---- MANEJO DE ERRORES
	-------------------------------------------------------- */
	errorHandler(input) {
		switch (input) {
			case "INPUT_MUST_BE_INTEGER":
				throw new Error("El número de entrada debe de ser un entero");
				break;
			case "INPUT_MUST_BE_GREATER_THAN_ZERO":
				throw new Error("El número introducido debe de ser mayor a 0");
				break;

			case "INPUT_MUST_NUMERICAL_TYPE":
				throw new Error(
					"El número introducido debe de ser tipo númerico"
				);
				break;

			case "INPUT_MUST_PRIMAL_NUMBER":
				throw new Error(
					"El número introducido debe de ser un número primo"
				);
				break;

			default:
				throw new Error("Se ha presentado un error no registrado");
		}
	}
}

module.exports = Series;
