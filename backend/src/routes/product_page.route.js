const express = require("express");
const router = express.Router();
const product_page_Controller = require("../controllers/product_page.controller");
router.get("/getproduct", product_page_Controller.getProductDetails);
router.get("/getCustomAttribute", product_page_Controller.getProductAttribute);
router.get("/getProductForCart", product_page_Controller.getProductForCart);
router.get("/getHomeScreenProduct", product_page_Controller.getHomeScreenProduct);




module.exports = router;
