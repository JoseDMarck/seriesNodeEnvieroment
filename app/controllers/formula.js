const Formula = require("../classes/Formula");
const RequestHandler = require("../classes/RequestHandler");
let formula = new Formula();

/* --------------------------------------------------------
/* ---- DO MATH OPERATIONS
-------------------------------------------------------- */
exports.doMathOperations = async (req, res) => {
	const { number } = req.body;
	try {
		RequestHandler.handleSuccessResponse(
			formula.doMathOperations(number),
			res
		);
	} catch (error) {
		RequestHandler.handleErrorResponse(error.message, res);
	}
};

/* --------------------------------------------------------
/* ---- RESOLVE FORMULA 
-------------------------------------------------------- */
exports.resolveFormula = async (req, res) => {
	const { number } = req.body;
	try {
		RequestHandler.handleSuccessResponse(
			formula.resolveFormula(number),
			res
		);
	} catch (error) {
		RequestHandler.handleErrorResponse(error.message, res);
	}
};

/* --------------------------------------------------------
/* ---- RESOLVE FORMULA 
-------------------------------------------------------- */
exports.resolveFormulaSingleNumber = async (req, res) => {
	const { number } = req.body;
	try {
		RequestHandler.handleSuccessResponse(
			formula.resolveFormulaSingleNumber(number),
			res
		);
	} catch (error) {
		RequestHandler.handleErrorResponse(error.message, res);
	}
};
