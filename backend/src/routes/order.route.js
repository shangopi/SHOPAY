const express = require("express");
const router = express.Router();
const order_Controller = require("../controllers/order.controller");

//for registered users -> creating an order
router.get("/createOrderForUser", order_Controller.createOrderForUser);
//for unregistered users -> creating an order
router.post("/createOrderForNonUser", order_Controller.createOrderForNonUser);

router.get("/getCustomerOrder", order_Controller.getCustomerOrder);


module.exports = router;
