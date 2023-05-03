const Series = require("../classes/Series");
const RequestHandler = require("../classes/RequestHandler");
let series = new Series();

/* --------------------------------------------------------
/* ---- GET PRIME NUMBER 
-------------------------------------------------------- */
exports.getPrimeNumber = async (req, res) => {
	const { number } = req.body;
	try {
		RequestHandler.handleSuccessResponse(
			series.getPrimeNumber(number),
			res
		);
	} catch (error) {
		RequestHandler.handleErrorResponse(error.message, res);
	}
};

/* --------------------------------------------------------
/* ---- GET TRIANGLE NUMBER 
-------------------------------------------------------- */
exports.getTriangularNumber = async (req, res) => {
	const { number } = req.body;
	try {
		RequestHandler.handleSuccessResponse(
			series.getTriangularNumber(number),
			res
		);
	} catch (error) {
		RequestHandler.handleErrorResponse(error.message, res);
	}
};

/* --------------------------------------------------------
/* ---- GET FIBONACCI NUMBER 
-------------------------------------------------------- */
exports.getFibonacciNumber = async (req, res) => {
	const { number } = req.body;
	try {
		RequestHandler.handleSuccessResponse(
			series.getFibonacciNumber(number),
			res
		);
	} catch (error) {
		RequestHandler.handleErrorResponse(error.message, res);
	}
};
