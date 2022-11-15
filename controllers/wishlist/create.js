const Wishlist = require("../../models/Wishlist.js");

const create = async function (req, res) {
	try {
		const wishlist = new Wishlist({
			user_id: req.body.user_id,
			stocks: [],
		});

		await wishlist.save();
		res.status(201).json({ success: true, result: wishlist });
	} catch (err) {
		res
			.status(err.status || 500)
			.json({ success: false, message: err.message || "Something went wrong" });
	}
};

module.exports = { create };
