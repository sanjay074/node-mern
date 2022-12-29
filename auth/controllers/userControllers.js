const product = require("../models/product");
const category = require("../models/category");
const subCategory = require("../models/subCategory");
import CustomErrorHandler from "../../services/CustomErrorHandler";
const brand = require("../models/brand");
const {
  productSchema,
  categorySchema,
  subCategorySchema,
  brandSchema,
} = require("../../validators/allValidator");

exports.addProduct = async (req, res) => {
  try {
    const data = req.body;
    const { error } = productSchema.validate(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    } else {
      const addProduct = await product.create(data);
      if (addProduct) {
        return res.status(201).json({
          status: 1,
          message: "Add product",
        });
      } else {
        return res.status(400).json({
          status: 0,
          message: "not add",
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      status: 0,
      message: error.toString(),
    });
  }
};

exports.getAlladdProduct = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const skip = (page - 1) * 10;
    const getAll = await product
      .find()
      .skip(skip)
      .limit(limit)
      .populate("productCategory")
      .populate("productSubCategory")
      .populate("brand");
    if (getAll[0]) {
      return res.status(200).json({
        status: 1,
        message: "Find all product",
        getAll,
      });
    } else {
      return next(CustomErrorHandler.nodata("No data"));
    }
  } catch (error) {
    return res.status(500).json({
      status: 0,
      message: error.toString(),
    });
  }
};

exports.getOneProduct = async (req, res, next) => {
  try {
    const getOne = await product
      .findById(req.params.id)
      .populate("productCategory")
      .populate("productSubCategory")
      .populate("brand");
    if (getOne !== null) {
      return res.status(200).json({
        status: 1,
        message: "Get One Product sucessfully",
        getOne,
      });
    } else {
      return next(CustomErrorHandler.nodata("No data"));
    }
  } catch (error) {
    return res.status(500).json({
      status: 0,
      message: error.toString(),
    });
  }
};

exports.updateproduct = async (req, res) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    } else {
      const updatedProject = await product.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      return res.status(200).json({
        status: 1,
        message: "product update successfully",
        updatedProject,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: 0,
      message: error.toString(),
    });
  }
};

exports.deleteproduct = async (req, res) => {
  try {
    const data = await product.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      status: 1,
      message: "Delete  product successfully ",
    });
  } catch (error) {
    return res.status(500).json({
      ststus: 0,
      message: error.toString(),
    });
  }
};
// category
exports.addcategory = async (req, res) => {
  try {
    const data = req.body;
    const { error } = categorySchema.validate(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    } else {
      const addProduct = await category.create(data);
      if (addProduct) {
        return res.status(201).json({
          status: 1,
          message: "Add category",
        });
      } else {
        return res.status(400).json({
          status: 0,
          message: "not add",
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      status: 0,
      message: error.toString(),
    });
  }
};

exports.getAllcategory = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const skip = (page - 1) * 10;
    const getAll = await category.find().skip(skip).limit(limit);
    if (getAll[0]) {
      return res.status(200).json({
        status: 1,
        message: "Find all product category",
        getAll,
      });
    } else {
      return next(CustomErrorHandler.nodata("No data"));
    }
  } catch (error) {
    return res.status(500).json({
      status: 0,
      message: error.toString(),
    });
  }
};

exports.getOnecategory = async (req, res, next) => {
  try {
    const getOne = await category.findById(req.params.id);
    if (getOne !== null) {
      return res.status(200).json({
        status: 1,
        message: "Get One category  sucessfully",
        getOne,
      });
    } else {
      return next(CustomErrorHandler.nodata("No data"));
    }
  } catch (error) {
    return res.status(500).json({
      status: 0,
      message: error.toString(),
    });
  }
};

exports.addsubCategory = async (req, res) => {
  try {
    const data = req.body;
    const { error } = subCategorySchema.validate(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    } else {
      const addProduct = await subCategory.create(data);
      if (addProduct) {
        return res.status(201).json({
          status: 1,
          message: "Add subCategory",
        });
      } else {
        return res.status(400).json({
          status: 0,
          message: "not add",
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      status: 0,
      message: error.toString(),
    });
  }
};

exports.getAllsubCategory = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const skip = (page - 1) * 10;
    const total = await subCategory.find().countDocuments().lean();
    const getAll = await subCategory
      .find()
      .skip(skip)
      .limit(limit)
      .populate("category");
    if (getAll[0]) {
      return res.status(200).json({
        status: 1,
        message: "Find all product category",
        getAll,
      });
    } else {
      return next(CustomErrorHandler.nodata("No data"));
    }
  } catch (error) {
    return res.status(500).json({
      status: 0,
      message: error.toString(),
    });
  }
};

exports.addbrand = async (req, res) => {
  try {
    const data = req.body;
    const { error } = brandSchema.validate(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    } else {
      const addProduct = await brand.create(data);
      if (addProduct) {
        return res.status(201).json({
          status: 1,
          message: "Add brand",
        });
      } else {
        return res.status(400).json({
          status: 0,
          message: "not add",
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      status: 0,
      message: error.toString(),
    });
  }
};

exports.getAllbrand = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const skip = (page - 1) * 10;
    const getAll = await brand.find().skip(skip).limit(limit);
    if (getAll[0]) {
      return res.status(200).json({
        status: 1,
        message: "Find all product category",
        getAll,
      });
    } else {
      return next(CustomErrorHandler.nodata("No data"));
    }
  } catch (error) {
    return res.status(500).json({
      status: 0,
      message: error.toString(),
    });
  }
};

exports.getProductBySubCategory = async (req, res) => {
  try {
    console.log(req.params.key);
    const findCategory = await subCategory.find({
      $or: [{ categoryId: { $regex: req.params.key } }],
    });
    res.status(200).json(findCategory);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};
