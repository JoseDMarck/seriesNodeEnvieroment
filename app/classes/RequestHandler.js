const {
	STATUS_OK,
	STATUS_INTERNAL_SERVER_ERROR,
} = require("../utils/status_types");

class RequestHandler {
	static jsonResponse(status, error, response, res) {
		return res.status(status).json({
			status,
			error,
			response,
		});
	}

	static handleSuccessResponse(responseData, res) {
		return RequestHandler.jsonResponse(STATUS_OK, false, responseData, res);
	}

	static handleErrorResponse(errorMessage, res) {
		return RequestHandler.jsonResponse(
			STATUS_INTERNAL_SERVER_ERROR,
			true,
			errorMessage,
			res
		);
	}
}

module.exports = RequestHandler;
