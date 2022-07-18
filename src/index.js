const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

const { SignUp, SignIn } = require("./controllers/auth.controller");

const productController = require("./controllers/product.controller");

app.get("/", async (req, res) => {
  try {
    res.status(200).send("Welcome Hydroponic Farm");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/signup", SignUp);

app.post("/signin", SignIn);

app.use("/products", productController);

module.exports = app;
