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
const phoneSchema = Joi.object()
  .keys({
    mobile: Joi.string()
      .regex(/^[6-9]{1}[0-9]{9}$/)
      .required(),
  })
  .required();
const otpSchema = Joi.object()
  .keys({
    details: Joi.string().required(),
    otp: Joi.number().max(999999).required(),
    mobile: Joi.string()
      .regex(/^[6-9]{1}[0-9]{9}$/)
      .required(),
  })
  .required();
module.exports = {
  productSchema,
  categorySchema,
  phoneSchema,
  otpSchema,
};
