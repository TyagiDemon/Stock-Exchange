const User = require("../../models/User.js");

const login = async function (req, res) {
	try {
		const existingUser = await User.findOne({ email: req.body.email });

		if (!existingUser) throw { status: 404, message: "User doesn't exist." };

		if (req.body.password === existingUser.password) {
			res.status(200).json(existingUser);
		}
		throw { status: 400, message: "Incorrect password." };
	} catch (err) {
		res
			.status(err.status || 500)
			.json({ success: false, message: err.message || "Something went wrong" });
	}
};

module.exports = { login };
