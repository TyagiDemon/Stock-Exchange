const Wallet = require("../../models/Wallet.js");

const create = async function (req, res) {
	try {
		const wallet = new Wallet({
			user_id: req.body.user_id,
		});

		await wallet.save();
		res.status(201).json({ success: true, result: wallet });
	} catch (err) {
		res
			.status(err.status || 500)
			.json({ success: false, message: err.message || "Something went wrong" });
	}
};

module.exports = { create };
