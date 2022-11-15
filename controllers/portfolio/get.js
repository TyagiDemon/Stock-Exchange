const Portfolio = require("../../models/Portfolio.js");

const get = async function (req, res) {
	try {
		const portfolio = await Portfolio.findById(req.params.id);
		if (!portfolio) throw { status: 404, message: "Portfolio not found" };

		res.status(200).json({ success: true, result: portfolio });
	} catch (err) {
		res
			.status(err.status || 500)
			.json({ success: false, message: err.message || "Something went wrong" });
	}
};

module.exports = { get };
