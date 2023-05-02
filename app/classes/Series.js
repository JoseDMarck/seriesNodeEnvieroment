class Series {
	constructor(number) {
		this.number = number;
		this.n_prime = null;
	}

	validateInputNumber() {}

	getPrimeNumber() {
		const number = this.n_prime;
		if (number <= 1) return false;
		for (let i = 2; i < number; i++) {
			if (number % i === 0) return false;
		}
		return number;
	}
	getTriangularNumber() {}
	getFibonacciNumber() {}
}
