const History = require("../../models/History.js");

const create = async function (req, res) {
	try {
		const history = new History({
			user_id: req.body.user_id,
		});

		await history.save();
		res.status(201).json({ success: true, result: history });
	} catch (err) {
		res
			.status(err.status || 500)
			.json({ success: false, message: err.message || "Something went wrong" });
	}
};

module.exports = { create };
