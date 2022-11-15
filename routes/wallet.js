const express = require("express");
const { create } = require("../controllers/wallet/create.js");
const { addBalance } = require("../controllers/wallet/addBalance.js");

const router = express.Router();

router.post("/create", create);

router.patch("/addBalance", addBalance);

module.exports = router;
