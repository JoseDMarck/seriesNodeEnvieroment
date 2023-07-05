const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const seriesRouters = require("./app/routes/series");
const formulaRouters = require("./app/routes/formula");

var cors = require("cors");

//const port = process.env.PORT || 3000;
const hostname = "localhost";
const port = 3000;

// Parsing Json peticiones no mayores a 20mb
app.use(
	bodyParser.json({
		limit: "40mb",
	})
);

app.use(
	bodyParser.urlencoded({
		limit: "40mb",
		extended: true,
	})
);

//CORS
app.use(cors());

app.use(seriesRouters);
app.use(formulaRouters);

app.use(express.static(path.join(__dirname, "public")));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	var err = new Error("Recurso no encontrado");
	err.status = 404;
	next(
		res.status(err.status).json({
			status: 404,
			error: true,
			message: err.message,
		})
	);
});

app.listen(port, hostname, function () {
	console.log(`Server running 🚀✨ at http://${hostname}:${port}/ `);
});
