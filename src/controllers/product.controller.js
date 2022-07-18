const express = require("express");

const router = express.Router();

const Product = require("../models/product.model");

router.get("/", async (req, res) => {
  try {
    const product = await Product.find().lean().exec();
    return res.status(200).send(product);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).lean().exec();
    return res.status(200).send(product);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
