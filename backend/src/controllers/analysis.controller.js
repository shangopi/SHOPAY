const analysis_model = require("../models/analysis.model");

exports.getProductCategoryWithMostOrders = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

    analysis_model.getProductCategoryWithMostOrders(req.query.id, (err, data) => {
       
        if (err)
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found product with id ${req.query.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error finding product with id " + req.query.id
                });}
                else{
                    res.send(data);
                }
    });
}

exports.getCustomerDetails = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

    analysis_model.getCustomerDetails(req.query.id, (err, data) => {
       
        if (err)
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found order with id ${req.query.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error finding order with id " + req.query.id
                });}
                else{
                    res.send(data);
                }
    });
}
exports.getAllCustomerDetails = ( req,res) => {
    

    analysis_model.getAllCustomerDetails( (err, data) => {
       
        if (err)
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `0 Customer`
                });
            } else {
                res.status(500).send({
                    message: "0 Customer"
                });}
                else{
                    res.send(data);
                }
    });
}

exports.BestProductInGivenTime = (req, res) => {
    if (!req.query.start_date || !req.query.end_date ) {
        res.status(400).send({
            message: "Start Date and End Date can not be empty!",
        });
    }
    else{    
    
    let start_date = req.query.start_date;
    let end_date = req.query.end_date;   
   
    // let start_date = '2022-07-01';
    // let end_date = '2022-08-01';

    analysis_model.BestProductInGivenTime(start_date,end_date, (err, data) => {
       
        if (err)
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found.`
                });
            } else {
                res.status(500).send({
                    message: "Error finding details"
                });}
                else{
                    res.send(data);
                }
    });
    }   
}