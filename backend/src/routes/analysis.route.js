const express = require("express");
const router = express.Router();
const analysis_Controller = require("../controllers/analysis.controller");


//returns product category with most orders.. highest 4 will be shown 
router.get("/getProductCategoryWithMostOrders", analysis_Controller.getProductCategoryWithMostOrders);

//customer id -> order details of the customer  
router.get("/getCustomerDetails", analysis_Controller.getCustomerDetails);

//customer id -> order details of the customer  
router.get("/getAllCustomerDetails", analysis_Controller.getAllCustomerDetails);

router.get("/BestProductInGivenTime", analysis_Controller.BestProductInGivenTime);


module.exports = router;
