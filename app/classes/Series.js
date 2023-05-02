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
			throw new Error("El número introducido debe de ser mayor a 0");

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
		const number = value;
		const fib = [0, 1];
		for (let i = 2; i <= number; i++) {
			fib[i] = fib[i - 2] + fib[i - 1];
		}
		return fib[number];
	}
	/* --------------------------------------------------------
	/* ---- VALIDAR NUMERO 
	-------------------------------------------------------- */
	validateInputNumber(value) {
		this.number = value;
		const number = value;

		//Valudar que el numero sea un Número
		if (typeof number !== "number")
			throw new Error("El número de entrada debe de ser un entero");

		//Validar si es número Primo
		if (!this.getPrimeNumber()) throw new Error("El número no es primo");

		//Validar numero triangular
		if (this.n_triangular < 1)
			throw new Error("El número triangular debe de ser mayor a 0");

		//Validar numero fibonacci
		if (this.n_fibonacci < 1)
			throw new Error("El número Fibonnaci debe de ser mayor a 0");

		return true;
	}
}

module.exports = Series;
