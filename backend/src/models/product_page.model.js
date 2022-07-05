var db = require("../../config/db.config");

const Product = function (product) {
    this.product_id = product.product_id;
    this.sku = product.sku;
    this.title = product.title;
    this.weight = product.weight;
    this.default_var_id = product.default_var_id;
    this.customAttribute = product.customAttribute;
    this.brand = product.brand;
    this.image = product.image;
    this.description = product.description;
};

Product.getProductByID = (product_id, result) => {
    const sqlSelect = "select * from product LEFT JOIN variant on product.default_varient_id = variant.variant_id where product.product_id=?;";
    db.query(sqlSelect, [product_id], (err, res) => {
        if (err) {
            result(null, err);
            return; 
        }

        if (res.length) {
            result(null, res);
            return;  
        } 

        else {
            result({ kind: "not_found" }, null);
        }
        //console.log(result);
    })
}



Product.getCustomAttribute = (product_id, result) => {
    const sqlSelect = "select * from custom_attribute where product_id=?;"
    db.query(sqlSelect, [product_id], (err, res) => {
        if (err) {
            result(null, err);
            // return;
        }
        if (res.length) {
            result(null, res);
            // return res;
        }
        else {
            result({ kind: "not_found" }, null);
        }
        //console.log(result);
    })
}

module.exports = Product;

Product.getAllProducts = (product_id, result) => {
    const sqlSelect = "select product.product_id,title,price,image from product LEFT JOIN variant on product.default_varient_id = variant.variant_id  ;"
    db.query(sqlSelect, [product_id], (err, res) => {
        if (err) {
            result(null, err);
            // return;
        }
        if (res.length) {
            result(null, res);
            // return res;
        }
        else {
            result({ kind: "not_found" }, null);
        }
        //console.log(result);
    })
}

module.exports = Product;