const express = require("express");
const router = express.Router();
const category_page_Controller = require("../controllers/category.controller");

//input : category id -> returning All products details in that category
router.get("/getProductByCategory", category_page_Controller.getProductByCategory);

//input : sub_category id -> returning All products details in that sub category
router.get("/getProductBySubCategory", category_page_Controller.getProductBySubCategory);

//input : product id -> returning category, subCategory details
router.get("/getProductCategory", category_page_Controller.getProductCategory);

//returning all categories
router.get("/getAllCategory", category_page_Controller.getAllCategory);

//returning all sub categories
router.get("/getAllSubCategory", category_page_Controller.getAllSubCategory);

//returning all products along with categories and sub categories
router.get("/getAllProduct", category_page_Controller.getAllProduct);



module.exports = router;
