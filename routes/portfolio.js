const express = require("express");
const { create } = require("../controllers/portfolio/create.js");
const { update } = require("../controllers/portfolio/update.js");
const { get } = require("../controllers/portfolio/get.js");

const router = express.Router();

router.get("/:id", get);

router.post("/create", create);

router.patch("/update", update);

module.exports = router;
