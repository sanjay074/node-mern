const { model, Schema } = require("mongoose");
const brandSchema = new Schema(
  {
    brandName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("Brand", brandSchema);
