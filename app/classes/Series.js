class Series {
	constructor(number) {
		this.number = number;
		this.n_prime = null;
		this.n_triangular = null;
		g;
	}

	validateInputNumber() {}

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
}
