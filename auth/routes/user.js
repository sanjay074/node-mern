const express = require("express");
const router = express.Router();
const {
  addProduct,
  getAlladdProduct,
  getOneProduct,
  updateproduct,
  deleteproduct,
  addcategory,
  getAllcategory,
  getOnecategory,
  addsubCategory,
  getAllsubCategory,
  addbrand,
  getAllbrand,
  getProductBySubCategory,
} = require("../controllers/userControllers");
router.post("/addProduct", addProduct);
router.get("/getAlladdProduct", getAlladdProduct);
router.get("/getOneProduct/:id", getOneProduct);
router.put("/updateproduct/:id", updateproduct);
router.delete("/deleteproduct/:id", deleteproduct);
router.post("/addcategory", addcategory);
router.get("/getAllcategory", getAllcategory);
router.get("/getOnecategory/:id", getOnecategory);
router.post("/addsubCategory", addsubCategory);
router.get("/getAllsubCategory", getAllsubCategory);
router.post("/addbrand", addbrand);
router.get("/getAllbrand", getAllbrand);
router.get("/getProductBySubCategory/:key", getProductBySubCategory);
module.exports = router;
