const User = require("../../models/User.js");

const register = async function (req, res) {
	try {
		const existingUser = await User.findOne({ email: req.body.email });

		if (existingUser) throw { status: 400, message: "User already exists" };
		const user = await User.create({
			name: req.body.name,
			username: req.body.username,
			email: req.body.email,
			password: req.body.password,
		});

		const wishlist = await axios
			.post("http://localhost:8012/wishlist/create", {
				user_id: user._id,
			})
			.then((res) => res.data);

		if (!wishlist.success) throw { message: "Wishlist not created" };
		user.wishlist = wishlist.result._id;

		const wallet = await axios
			.post("http://localhost:8012/wallet/create", {
				user_id: user._id,
			})
			.then((res) => res.data);

		if (!wallet.success) throw { message: "Wallet not created" };

		user.wallet = wallet.result._id;

		const portfolio = await axios
			.post("http://localhost:8012/portfolio/create", {
				user_id: user._id,
			})
			.then((res) => res.data);

		if (!portfolio.success) throw { message: "Portfolio not created" };

		user.portfolio = portfolio.result._id;

		const history = await axios
			.post("http://localhost:8012/history/create", {
				user_id: user._id,
			})
			.then((res) => res.data);

		if (!history.success) throw { message: "History not created" };
		user.history = history.result._id;

		await user.save();

		res.status(201).json({ success: true, result: user });
	} catch (err) {
		res
			.status(err.status || 500)
			.json({ success: false, message: err.message || "Something went wrong" });
	}
};

module.exports = { register };
