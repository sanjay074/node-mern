const express = require("express");
const router = express.Router();
const {
  addProduct,
  getAlladdProduct,
  getOneProduct,
  updateSubscription,
  deleteproduct,
  addcategory,
  getAllcategory,
  getOnecategory,
} = require("../controllers/userControllers");
router.post("/addProduct", addProduct);
router.get("/getAlladdProduct", getAlladdProduct);
router.get("/getOneProduct/:id", getOneProduct);
router.put("/updateSubscription/:id", updateSubscription);
router.delete("/deleteproduct/:id", deleteproduct);
router.post("/addcategory", addcategory);
router.get("/getAllcategory", getAllcategory);
router.get("/getOnecategory/:id", getOnecategory);
module.exports = router;
