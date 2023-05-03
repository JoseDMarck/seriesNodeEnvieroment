const Series = require("./Series");
const ErrorHandler = require("./ErrorHandler");

class Formula extends Series {
	constructor(number) {
		super(number);
		this.operationNumbers;
	}

	doMathOperations(number) {
		ErrorHandler.validateIsCorrectNumber("IntegerValidNumber", number);
		this.operationNumbers = {
			n_prime: number + 3,
			n_triangle: number - 1,
			n_fibonacci: number - 2,
		};
		return this.operationNumbers;
	}

	resolveFormula(number) {
		const primeNumber = super.getPrimeNumber(number + 3);
		const triangularNumber = super.getTriangularNumber(number - 1);
		const fibonacciNumber = super.getFibonacciNumber(number - 2);
		return (primeNumber * triangularNumber) / fibonacciNumber;
	}

	resolveFormulaSingleNumber(number) {
		const primeNumber = super.getPrimeNumber(number);
		const triangularNumber = super.getTriangularNumber(number);
		const fibonacciNumber = super.getFibonacciNumber(number);

		return (primeNumber * triangularNumber) / fibonacciNumber;
	}
}

module.exports = Formula;
