const userModel = require("../models/user.model");


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
