const express = require("express");
const router = express.Router();
const product_page_Controller = require("../controllers/product_page.controller");

//to be removed.. old implementation remove it after using below functions...
router.get("/getproduct", product_page_Controller.getProductDetails);
router.get("/getCustomAttribute", product_page_Controller.getProductAttribute);
router.get("/getHomeScreenProduct", product_page_Controller.getHomeScreenProduct);

//to get details of product using product id
router.get("/getProductByID", product_page_Controller.getProductByID);
//to get all prodcuts (used in home screen)
router.get("/getAllProducts", product_page_Controller.getAllProducts);

module.exports = router;
