const express = require("express");
const { register } = require("../controllers/user/register.js");
const { login } = require("../controllers/user/login.js");

const router = express.Router();

router.get("/", function (req, res) {
	res.send("user home");
});

router.post("/login", login);
router.post("/register", register);

module.exports = router;
