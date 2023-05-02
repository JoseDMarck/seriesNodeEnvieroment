const express = require("express");
const router = express.Router();
const controller = require("../controllers/Person");
const path = "person";
/* --------------------------------------------------------
/* ---- Get all revisions
-------------------------------------------------------- */

router.get(`/${path}`, controller.getPerson);

module.exports = router;
