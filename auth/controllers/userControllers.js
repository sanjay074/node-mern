const product = require("../models/product");
const category = require("../models/category");
const {
  productSchema,
  categorySchema,
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

exports.getAlladdProduct = async (req, res) => {
  try {
    const { page, limit } = req.query;
    const skip = (page - 1) * 10;
    const total = await product.find().countDocuments().lean();
    const getAll = await product.find().skip(skip).limit(limit);
    res.status(200).json({
      message: "Find all product",
      getAll,
      totalproduct: total,
    });
  } catch (error) {
    return res.status(500).json({
      status: 0,
      message: error.toString(),
    });
  }
};

exports.getOneProduct = async (req, res) => {
  try {
    const getOne = await product.findById(req.params.id);
    if (getOne !== null) {
      return res.status(200).json({
        status: 1,
        message: "Get One Product sucessfully",
        getOne,
      });
    } else {
      return res.status(400).json({
        status: 1,
        message: "no data",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: 0,
      message: error.toString(),
    });
  }
};

exports.updateSubscription = async (req, res) => {
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

exports.getAllcategory = async (req, res) => {
  try {
    const { page, limit } = req.query;
    const skip = (page - 1) * 10;
    const total = await category.find().countDocuments().lean();
    const getAll = await category.find().skip(skip).limit(limit);
    res.status(200).json({
      message: "Find all category",
      getAll,
      totalcategory: total,
    });
  } catch (error) {
    return res.status(500).json({
      status: 0,
      message: error.toString(),
    });
  }
};

exports.getOnecategory = async (req, res) => {
  try {
    const getOne = await category.findById(req.params.id);
    if (getOne !== null) {
      return res.status(200).json({
        status: 1,
        message: "Get One category  sucessfully",
        getOne,
      });
    } else {
      return res.status(400).json({
        status: 1,
        message: "no data",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: 0,
      message: error.toString(),
    });
  }
};