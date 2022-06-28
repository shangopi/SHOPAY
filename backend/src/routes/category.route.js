const express = require("express");
const router = express.Router();
const category_page_Controller = require("../controllers/category.controller");

//input : product id -> returning category, subCategory details
router.get("/getProductCategory", category_page_Controller.getProductCategory);

//returning all categories
router.get("/getAllCategory", category_page_Controller.getAllCategory);

//returning all sub categories
router.get("/getAllSubCategory", category_page_Controller.getAllSubCategory);

//returning all products along with categories and sub categories
router.get("/getAllProduct", category_page_Controller.getAllProduct);

module.exports = router;
