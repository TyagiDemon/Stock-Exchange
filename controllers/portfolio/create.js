const Portfolio = require("../../models/Portfolio.js");

const create = async function (req, res) {
	try {
		const portfolio = await Portfolio.create({
			user_id: req.body.user_id,
		});

		await portfolio.save();
		res.status(201).json({ success: true, result: portfolio });
	} catch (err) {
		res
			.status(err.status || 500)
			.json({ success: false, message: err.message || "Something went wrong" });
	}
};

module.exports = { create };
