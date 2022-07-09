const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// Create and Save a new account
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }
    const salt = bcrypt.genSaltSync(saltRounds);

    // Create a new User Account
    const newUser = new userModel({
        // cus_id:req.body.cus_id,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        telephone:req.body.telephone,
        email:req.body.email,
        address_line1:req.body.address_line1,
        address_line2:req.body.address_line2,
        address_line3:req.body.address_line3,
        city:req.body.city,
        zip_code:req.body.zip_code,
        district:req.body.district,
        password:bcrypt.hashSync(req.body.password, salt)
    });

    // Save account in the database
    userModel.create(newUser, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the user.",
            });
        else res.send(data);
    });
};


//Get customer details
exports.getDetailsById = (req, res) => {

    userModel.getDetailsById(req.params.cus_id, (err, data) => {
        if (err)
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found user with id ${req.params.cus_id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error finding user with id " + req.params.cus_id
                });}
        else res.send(data);
    });
}
