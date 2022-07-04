var db = require("../../config/db.config");
const order_model = require("../models/order.model");

exports.createOrderForUser = (req, res) => {

    order_model.createOrderForUser(req.query.id, (err, data) => {
        if (err)
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found varient with id ${req.query.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error varient student with id " + req.query.id
                });}
        res.send(data);
    });

}
exports.createOrderForNonUser = (req, res) => {

    order_model.createOrderForNonUser(req.query.id, (err, data) => {
        if (err)
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found varient with id ${req.query.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error varient student with id " + req.query.id
                });}
        res.send(data);
    });

}

