const Wishlist = require("../../models/Wishlist.js");

const get = async function (req, res) {
	try {
		const wishlist = await Wishlist.findById(req.params.id);
		if (!wishlist) throw { status: 404, message: "Wishlist not found" };

		res.status(200).json({ success: true, result: wishlist });
	} catch (err) {
		res
			.status(err.status || 500)
			.json({ success: false, message: err.message || "Something went wrong" });
	}
};

module.exports = { get };
