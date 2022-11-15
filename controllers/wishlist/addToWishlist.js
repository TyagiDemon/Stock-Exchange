const Wishlist = require("../../models/Wishlist.js");

const addToWishlist = async function (req, res) {
	try {
		const wishlist = await Wishlist.findById(req.body.wishlist_id);
		if (!wishlist) throw { status: 404, message: "Wishlist not found" };

		let setStocks = new Set(wishlist.stocks);
		setStocks.add(req.body.company);
		wishlist.stocks = Array.from(setStocks);
		await wishlist.save();
		res.status(200).json(wishlist);
	} catch (err) {
		res
			.status(err.status || 500)
			.json({ success: false, message: err.message || "Something went wrong" });
	}
};

module.exports = { addToWishlist };
