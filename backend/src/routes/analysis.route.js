const express = require("express");
const router = express.Router();
const analysis_Controller = require("../controllers/analysis.controller");


//returns product category with most orders.. highest 4 will be shown 
router.get("/getProductCategoryWithMostOrders", analysis_Controller.getProductCategoryWithMostOrders);

//customer id -> order details of the customer  
router.get("/getCustomerDetails", analysis_Controller.getCustomerDetails);

//input get requests start_date & end_date -> returns  details of All orders
router.get("/getAllCustomerDetails", analysis_Controller.getAllCustomerDetails);

//input get requests start_date & end_date -> returns  details of All
router.get("/BestProductInGivenTime", analysis_Controller.BestProductInGivenTime);

//input product_id -> returns time period - count analysis data for particular product
router.get("/BestTimeForProduct", analysis_Controller.BestTimeForProduct);

//input product_id -> returns time period - count analysis data for particular product
router.get("/QuarterlyReport", analysis_Controller.QuarterlyReport);

module.exports = router;
