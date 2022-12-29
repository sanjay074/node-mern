const Joi = require("joi");
const productSchema = Joi.object({
  productName: Joi.string().required(),
  productPrice: Joi.number().required(),
  productDiscount: Joi.number().required(),
  sellingPrice: Joi.number().required(),
  color: Joi.array().required(),
  size: Joi.array().required(),
});
const categorySchema = Joi.object({
  categoryName: Joi.string().required(),
});
const subCategorySchema = Joi.object({
  subCategoryName: Joi.string().required(),
  category: Joi.string().required(),
});
const brandSchema = Joi.object({
  brandName: Joi.string().required(),
});
module.exports = {
  productSchema,
  categorySchema,
  subCategorySchema,
  brandSchema,
};
