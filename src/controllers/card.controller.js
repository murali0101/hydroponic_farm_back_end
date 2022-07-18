const express = require("express");
const authorization = require("../middlewares/authorization");

const router = express.Router();

const Cart = require("../models/card.model");

router.get("/", authorization, async (req, res) => {
  try {
    const cart = await Cart.find({ userId: req.user._id })
      .populate({ path: "productId", select: {} })
      .lean()
      .exec();
    return res.status(200).send(cart);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post("/:id", authorization, async (req, res) => {
  try {
    const exist = await Cart.find({
      $and: [
        { userId: { $eq: req.user._id } },
        { productId: { $eq: req.params.id } },
      ],
    });

    if (exist.length != 0) {
      return res.status(201).send("Product Already Add To Cart");
    }
    const cart = await Cart.create({
      userId: req.user._id,
      productId: req.params.id,
    });
    return res.status(201).send("Product is added to the Cart");
  } catch (error) {
    console.log("error:", error);
    return res.status(500).send(error);
  }
});

router.delete("/:id", authorization, async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id);
    return res.status(200).send("Product Removed From the Cart");
  } catch (error) {
    console.log("error:", error);
    return res.status(500).send(error);
  }
});

module.exports = router;
