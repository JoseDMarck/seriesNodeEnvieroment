const status = require("../utils/status_types");

class RequestHandler {
	static jsonResponse(status, error, response, res) {
		return res.status(status).json({
			status,
			error,
			response,
		});
	}

	static handleSuccessResponse(responseData, res) {
		return RequestHandler.jsonResponse(
			status.STATUS_OK,
			false,
			responseData,
			res
		);
	}

	static handleErrorResponse(errorMessage, res) {
		return RequestHandler.jsonResponse(
			status.STATUS_INTERNAL_SERVER_ERROR,
			true,
			errorMessage,
			res
		);
	}
}

module.exports = RequestHandler;
