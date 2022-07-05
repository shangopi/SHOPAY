const category_model = require("../models/category.model");
exports.getProductCategory = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

    category_model.getProductCategory(req.query.id, (err, data) => {
       
        if (err)
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found product with id ${req.query.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error finding product with id " + req.query.id
                });}
        res.send(data);
    });

}

exports.getAllCategory = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

    category_model.getAllCategory( (err, data) => {
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

exports.getAllSubCategory = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

    category_model.getAllSubCategory( (err, data) => {
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

exports.getAllProduct = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

    category_model.getAllProduct( (err, data) => {
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