class Person {
	constructor(firstName, email) {
		this._firstName = firstName;
		this._email = email;
	}

	work() {
		return "Im the method work";
	}

	eat() {
		return "Im the method eat";
	}
}

module.exports = Person;
