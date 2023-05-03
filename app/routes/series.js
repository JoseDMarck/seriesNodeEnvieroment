const express = require("express");
const router = express.Router();
const controller = require("../controllers/series");
const path = "series";
/* --------------------------------------------------------
/* ---- ROUTE GET PRIME NUMBER
-------------------------------------------------------- */
router.post(`/${path}/get-prime-number`, controller.getPrimeNumber);

/* --------------------------------------------------------
/* ---- ROUTE GET TRIANGULAR NUMBER
-------------------------------------------------------- */
router.post(`/${path}/get-triangular-number`, controller.getTriangularNumber);

/* --------------------------------------------------------
/* ---- ROUTE GET FIBONACCI NUMBER
-------------------------------------------------------- */
router.post(`/${path}/get-fibonacci-number`, controller.getFibonacciNumber);

module.exports = router;
