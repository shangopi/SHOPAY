var db = require("../../config/db.config");
const product_model = require("../models/product_page.model");


exports.getProductByID = (req, res) => {
    

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
                        images : data.images,
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

exports.getProductAttribute = (req, res) => {

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

    const sqlSelect = "select * from product LEFT JOIN variant using (product_id);"
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

