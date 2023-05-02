class Series {
	constructor(number) {
		this.number = number;
		this.n_prime = null;
		this.n_triangular = null;
		this.n_fibonacci = null;
	}

	/* --------------------------------------------------------
	/* ---- NUMERO PRIMO
	-------------------------------------------------------- */

	getPrimeNumber() {
		const number = this.n_prime;
		if (number <= 1) return false;
		for (let i = 2; i < number; i++) {
			if (number % i === 0) return false;
		}
		return number;
	}

	/* --------------------------------------------------------
	/* ---- NUMERO TRIANGULAR
	-------------------------------------------------------- */

	getTriangularNumber() {
		const number = this.n_triangular;
		let tNumber = 0;
		let i = 1;
		while (i <= this.number) {
			tNumber += i;
			i++;
		}
		return tNumber;
	}

	/* --------------------------------------------------------
	/* ---- NUGMERO FIBONACCI
	-------------------------------------------------------- */

	getFibonacciNumber() {
		const number = this.n_fibonacci;
		const fib = [0, 1];
		for (let i = 2; i <= number; i++) {
			fib[i] = fib[i - 2] + fib[i - 1];
		}
		return fib[number];
	}
	/* --------------------------------------------------------
	/* ---- VALIDAR NUMERO 
	-------------------------------------------------------- */
	validateInputNumber() {
		const number = this.number;

		this.n_prime = this.number + 3; // (n+3)
		this.n_triangular = this.number - 1; // (n+1)
		this.n_fibonacci = this.number - 2; // (n-2)

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
