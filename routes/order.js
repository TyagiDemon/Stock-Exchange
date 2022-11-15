const express = require("express");
const { create } = require("../controllers/order/create.js");

const router = express.Router();

router.post("/create", create);

module.exports = router;
