const { Schema, model } = require("mongoose");

const reqString = { type: String, required: true };
const reqNumber = { type: Number, required: true };

const productSchema = new Schema(
  {
    name: reqString,
    image: reqString,
    price: reqNumber,
  },
  {
    versionKey: false,
  }
);

module.exports = model("product", productSchema);
