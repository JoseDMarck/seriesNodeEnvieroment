const Series = require("./Series");
const ErrorHandler = require("./ErrorHandler");

class Formula extends Series {
	constructor(number, sNumbers = {}) {
		super(number);
		this.sNumbers = sNumbers;
	}

	doMathOperations(number) {
		ErrorHandler.validateIsCorrectNumber("IntegerValidNumber", number);
		const sNumbers = {
			n_prime: number + 3,
			n_triangle: number - 1,
			n_fibonacci: number - 2,
		};
		return sNumbers;
	}

	resolveFormula(number) {
		const { n_prime, n_triangle, n_fibonacci } =
			this.doMathOperations(number);

		const primeNumber = super.getPrimeNumber(n_prime);
		const triangularNumber = super.getTriangularNumber(n_triangle);
		const fibonacciNumber = super.getFibonacciNumber(n_fibonacci);

		return (primeNumber * triangularNumber) / fibonacciNumber;
	}
}

module.exports = Formula;
