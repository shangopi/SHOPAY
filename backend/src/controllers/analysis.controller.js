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


exports.BestTimeForProduct = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

    analysis_model.BestTimeForProduct(req.query.id, (err, data) => {
       
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
                    var month= ["January","February","March","April","May","June","July","August","September","October","November","December"];
                    const dateObj = new Date();
                    const monthName = dateObj.toLocaleString("default", { month: "long" });
                    let index = month.indexOf(monthName);
                    output = [];
                    for (let i = 0; i < 13; i++) {
                        if(i!=0){
                            let data_arr = data.filter(e => e.month === month[index]);
                            if (data_arr.length !=0) {
                                let temp = {
                                    month : month[index],
                                    count : data_arr[0].quantity
                                }
                                output.push(temp);
                              
                              }
                              else{
                                let temp = {
                                    month : month[index],
                                    count : 0
                                }
                                output.push(temp)
                                
                              }
                        }
                        
                        if(index==11) {
                            index = 0;
                        }
                        else{
                            index+=1;
                        }
                      }
                      
                      
                      
                    res.send(output);
                }
    });
}

exports.QuarterlyReport = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

    analysis_model.QuarterlyReport(req.query.year, (err, data) => {
        if (err)
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found records for year ${req.query.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error in Finding records for year " + req.query.id
                });}
            else{
                res.send(data);
            }
        
    });

}