const express = require("express");
const router = express.Router();
const controller = require("../controllers/formula");
const path = "formula";

/* --------------------------------------------------------
/* ---- ROUTE RESOLVE FORMULA
-------------------------------------------------------- */
router.post(`/${path}/do-math-operations`, controller.doMathOperations);

/* --------------------------------------------------------
/* ---- ROUTE RESOLVE FORMULA
-------------------------------------------------------- */
router.post(`/${path}/resolve-formula`, controller.resolveFormula);

/* --------------------------------------------------------
/* ---- ROUTE RESOLVE FORMULA
-------------------------------------------------------- */
router.post(
	`/${path}/resolve-formula-single-number`,
	controller.resolveFormulaSingleNumber
);

module.exports = router;
