const express = require("express");
const router = express.Router();
const order_Controller = require("../controllers/order.controller");

//for registered users -> creating an order
router.post("/createOrderForUser", order_Controller.createOrderForUser);
//for unregistered users -> creating an order
router.post("/createOrderForNonUser", order_Controller.createOrderForNonUser);
// customer_id -> details of orders made by particular customer
router.get("/getCustomerOrder", order_Controller.getCustomerOrder);

// order_id -> details of order
router.get("/getOrderByID", order_Controller.getOrderByID);

//change order state
router.get("/updateState",order_Controller.setState);

module.exports = router;
