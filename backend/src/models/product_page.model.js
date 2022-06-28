var db = require("../../config/db.config");

const Product = function (product) {
    this.product_id = product.product_id;
    this.sku = product.sku;
    this.title = product.title;
    this.weight = product.weight;
    this.default_var_id = product.default_var_id;
    this.customAttribute = product.customAttribute;
    this.brand = product.brand;
    this.images = product.images;
    this.description = product.description;
};

Product.getProductByID = (product_id, result) => {
    const sqlSelect = "select * from product where product_id=?;"
    db.query(sqlSelect, [product_id], (err, res) => {
        if (err) {
            result(null, err);
            return; 
        }
        if (res.length) {

                const sqlquery = "SELECT image_url FROM product_image where product_id=?;"
                db.query(sqlquery, [product_id], (err, res1) => {
                if (err) {
                    result(null, err);
                    return; 
                }
                if (res.length) {
                    res.images =[]
                    for (let j=0; j<res1.length; j++){
                       res.images.push(res1[j].image_url);
                       if(j==res1.length-1){
                            result(null, res);
                            return;  
                       } 
                    }                                  
                     
                }
            })
                       
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