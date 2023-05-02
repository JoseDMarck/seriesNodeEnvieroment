const Series = require("./Series");

export default class SeriesN extends Series {
	constructor(number) {
		super(number);
	}

	getSeriesN() {
		const primeNumber = super.getPrimeNumber();
		const triangularNumber = super.getTriangularNumber();
		const fibonacciNumber = super.getFibonacciNumber();

		return (primeNumber * triangularNumber) / fibonacciNumber;
	}
}

module.exports = SeriesN;
