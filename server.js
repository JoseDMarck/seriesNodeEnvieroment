const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const seriesRouters = require("./app/routes/series");

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
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, hostname, function () {
	console.log(`Server running 🚀✨ at http://${hostname}:${port}/ `);
});
