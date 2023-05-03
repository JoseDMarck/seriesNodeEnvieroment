const ErrorHandler = require("./ErrorHandler");

class Series {
	constructor(number) {
		this.number = number;
	}

	/* --------------------------------------------------------
	/* ---- NUMERO PRIMO
	-------------------------------------------------------- */

	getPrimeNumber(value) {
		const number = value;
		ErrorHandler.validateIsCorrectNumber("primeNumber", number);
		for (let i = 2; i < number; i++) {
			if (number % i === 0)
				ErrorHandler.throwError("INPUT_MUST_PRIMAL_NUMBER");
		}
		return number;
	}

	/* --------------------------------------------------------
	/* ---- NUMERO TRIANGULAR
	-------------------------------------------------------- */

	getTriangularNumber(value) {
		const number = value;
		ErrorHandler.validateIsCorrectNumber("triangleNumber", number);
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
		ErrorHandler.validateIsCorrectNumber("fibonacciNumber", number);
		const fib = [0, 1];
		for (let i = 2; i <= number; i++) {
			fib[i] = fib[i - 2] + fib[i - 1];
		}
		return fib[number];
	}
}

module.exports = Series;
