const { model, Schema } = require("mongoose");
const category = require("./category");
const subCategorySchema = new Schema(
  {
    subCategoryName: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: category,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = model("subcategory", subCategorySchema);
