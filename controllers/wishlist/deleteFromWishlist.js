const Wishlist = require("../../models/Wishlist.js");

const deleteFromWishlist = async function (req, res) {
	try {
		const wishlist = await Wishlist.findById(req.params.wishlist_id);
		if (!wishlist) throw { status: 404, message: "Wishlist not found" };

		wishlist.stocks.map((item, key) => {
			if (item === req.params.company) {
				wishlist.stocks.splice(key, 1);
				return;
			}
		});

		await wishlist.save();
		res.status(200).json(wishlist);
	} catch (err) {
		res
			.status(err.status || 500)
			.json({ success: false, message: err.message || "Something went wrong" });
	}
};

module.exports = { deleteFromWishlist };
