const Person = require("./Person");

class Worker extends Person {
	constructor(firstNameTest, emailTest, phone) {
		super(firstNameTest, emailTest);
		this._phone = phone;
	}
}

module.exports = Worker;
