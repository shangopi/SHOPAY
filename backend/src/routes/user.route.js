const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// Create a new user
router.post("/create", userController.create);

router.get("/getDetailsById/:cus_id",userController.getDetailsById);

module.exports = router;