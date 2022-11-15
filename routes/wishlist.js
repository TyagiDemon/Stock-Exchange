const express = require("express");
const { get } = require("../controllers/wishlist/get.js");
const { create } = require("../controllers/wishlist/create.js");
const { addToWishlist } = require("../controllers/wishlist/addToWishlist.js");
const { deleteFromWishlist } = require("../controllers/wishlist/deleteFromWishlist.js");

const router = express.Router();

router.get("/:id", get);
router.post("/create", create);
router.patch("/addToWishlist", addToWishlist);
router.delete("/remove/:wishlist_id/:company", deleteFromWishlist);

module.exports = router;
