const express = require("express");
const router = express.Router();
const order_Controller = require("../controllers/order.controller");

router.get("/createOrderForUser", order_Controller.createOrderForUser);
router.get("/createOrderForNonUser", order_Controller.createOrderForUser);


module.exports = router;
