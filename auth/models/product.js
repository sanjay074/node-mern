const { model, Schema } = require("mongoose");
const category = require("./category");
const subCategory = require("./subCategory");
const Brand = require("./brand");
const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    productDiscount: {
      type: Number,
      required: true,
    },
    productCategory: {
      type: Schema.Types.ObjectId,
      ref: category,
    },
    productSubCategory: {
      type: Schema.Types.ObjectId,
      ref: subCategory,
    },
    brand: {
      type: Schema.Types.ObjectId,
      ref: Brand,
    },
    color: [
      {
        colorName: {
          type: String,
        },
        size: {
          type: Array,
        },
      },
    ],
    size: {
      type: Array,
    },
    qunantitiy: {
      type: Number,
    },
    sellingPrice: {
      type: Number,
    },
  },
  { timestamps: true }
);
module.exports = model("product", productSchema);
