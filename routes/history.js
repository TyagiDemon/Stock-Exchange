const express = require("express");
const { create } = require("../controllers/history/create.js");
const { addtoHistory } = require("../controllers/history/addToHistory.js");

const router = express.Router();

router.post("/create", create);
router.patch("/addtoHistory", addtoHistory);

module.exports = router;
