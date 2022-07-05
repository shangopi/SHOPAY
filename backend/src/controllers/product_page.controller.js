var db = require("../../config/db.config");
const product_model = require("../models/product_page.model");


exports.getProductByID = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }
    

    product_model.getProductByID(req.query.id, (err, data) => {
        if (err)
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found product with id ${req.query.Id}.`
                });
            }
            else {
                res.status(500).send({
                    message: "Error finding product with id " + req.query.Id
                });
            }

        else {
            const func = (err, data1) => {
                if (err)
                    if (err.kind === "not_found") {
                        res.status(404).send({
                            message: `Not found custom Attribute with id ${id}.`
                        });
                    }
                    else {
                        res.status(500).send({
                            message: "Error finding student with id " + id
                        });
                    }
                else {

                    const new_product = new product_model({
                        product_id: data[0].product_id,
                        sku: data[0].sku,
                        title: data[0].title,
                        weight: data[0].weight,
                        default_var_id: data[0].default_varient_id,
                        brand: data[0].brand,
                        image : data[0].image,
                        default_var_price : data[0].price,
                        default_var_count : data[0].count,
                        description : data[0].description,
                        customAttribute: data1
                    });
                    
                    res.send(new_product);

                }
            }

            product_model.getCustomAttribute(req.query.id, func);
        }


    });
}



exports.getProductDetails = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

    const id = req.query.id;

    const sqlSelect = "select * from product LEFT JOIN variant using (product_id) where product_id=?;"
    db.query(sqlSelect, [id], (err, result) => {
        if (err) {
            res.send(err);
            //console.log(result);
            console.log("error: ", err);
            result(null, err);
            return;
        }
        else {
            res.send(result);
        }
    })

}

exports.getAllProducts = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

    product_model.getAllProducts(req.query.id, (err, data) => {
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

exports.getProductAttribute = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

    const id = req.query.id;
    const sqlSelect = "select * from custom_attribute where product_id=?;"
    db.query(sqlSelect, [id], (err, result) => {
        if (err) {
            res.send(err);
            //console.log(result);
            console.log("error: ", err);
            result(null, err);
            return;
        }
        else {
            res.send(result);
        }
        //console.log(result);
    })

}

exports.getHomeScreenProduct = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

    const sqlSelect = "select product.product_id,title,price,image from product LEFT JOIN variant on product.default_varient_id = variant.variant_id  ;"
    db.query(sqlSelect, (err, result) => {
        if (err) {
            res.send(err);
            //console.log(result);
            console.log("error: ", err);
            result(null, err);
            return;
        }
        else {
            res.send(result);
        }
    })

}

