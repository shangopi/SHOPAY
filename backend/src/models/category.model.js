var db = require("../../config/db.config");

const category = function(){

}



category.getProductCategory = (product_id, result) => {
    const sqlSelect = "SELECT *,shopay.sub_category.name as sub_category_name FROM shopay.contains left join shopay.sub_category using (sub_category_id) natural join has left join category using (category_id) WHERE product_id=?;"
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
      
    })
}

category.getAllCategory = (result) => {
    const sqlSelect = "SELECT * from category;"
    db.query(sqlSelect,  (err, res) => {
        
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
      
    })
}

category.getAllSubCategory = (result) => {
    //using category_subCategory view
    const sqlSelect = "SELECT * FROM category_subCategory ;"
    db.query(sqlSelect,  (err, res) => {
        
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
      
    })
}

category.getAllProduct = (result) => {
    //
    const sqlSelect = "SELECT * FROM  shopay.contains left join category_subCategory using (sub_category_id) ;"
    db.query(sqlSelect,  (err, res) => {
        
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
      
    })
}


module.exports = category;