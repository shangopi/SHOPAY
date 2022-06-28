const express = require("express");
const router = express.Router();
const variant_controller = require("../controllers/variant.controller");

//to get all varients of a product using product id with limited information
router.get("/getAllVarients", variant_controller.getAllVarient);

//to get all varients of a product using product id with type informations
router.get("/getAllVarientsFullInfo", variant_controller.getAllVarientsFullInfo);

//to get the information of specific varient using varient id
router.get("/getVarientByID", variant_controller.getVarientByID);

//to get the information of specific varient's type informations using varient id
router.get("/getVariantInfoByID", variant_controller.getVariantInfoByID);

module.exports = router;
