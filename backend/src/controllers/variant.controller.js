var db = require("../../config/db.config");
const variant_model = require("../models/variant.model");

exports.getVarientByID = (req, res) => {

    variant_model.getVariantByID(req.query.id, (err, data) => {
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

exports.getAllVarientsFullInfo = (req,res)=>{
    variant_model.getAllVarientsFullInfo(req.query.id, (err, data) => {
        if (err)
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found varient with id ${req.query.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error varient student with id " + req.query.id
                });}
        else{
            res.send(data);
        }
        
    });

}

exports.getVariantInfoByID = (req, res) => {

    variant_model.getVariantInfoByID(req.query.id, (err, data) => {
        if (err)
            if (err.kind === "not_found") {
                res.send(data);
            } else {
                res.status(500).send({
                    message: "Error varient student with id " + req.query.id
                });}
        else{
            res.send(data);
        }
        
    });


}

exports.getAllVarient = (req, res) => {

    variant_model.getAllVarient(req.query.id, (err, data) => {
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
