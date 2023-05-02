const Person = require("../classes/Person");
const Worker = require("../classes/Worker");

exports.getPerson = (req, res) => {
	const body = req.body;
	let persona5 = new Person("Jose", "josewbmx@gmail.com");
	let worker2 = new Worker("Jose Saramago", "test", "35212161");

	res.status(200).json({
		status: 200,
		message: `Hola soy ${persona5._firstName}`,
		message: `trabajador ${worker2._firstName} ${worker2._email} ${worker2._phone}`,
	});
};
