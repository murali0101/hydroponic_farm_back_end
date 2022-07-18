const { Schema, model } = require("mongoose");

const reqString = { type: String, required: true };


const cartSchema = new Schema(
  {
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    productId:{
        type: Schema.Types.ObjectId,
        ref: "product",
        required: true
    }
   
  },
  {
    versionKey: false,
  }
);

module.exports = model("cart", cartSchema);
