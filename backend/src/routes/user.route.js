const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");


router.get("/getDetailsById/:cus_id",userController.getDetailsById);

module.exports = router;