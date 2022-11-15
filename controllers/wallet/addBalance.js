const Wallet = require("../../models/Wallet.js");

const addBalance = async function (req, res) {
	try {
		const wallet = await Wallet.findById(req.body.wallet_id);
		wallet.balance += req.body.balance;
		await wallet.save();

		res.status(200).json({ success: true, result: wallet });
	} catch (err) {
		res
			.status(err.status || 500)
			.json({ success: false, message: err.message || "Something went wrong" });
	}
};

module.exports = { addBalance };
