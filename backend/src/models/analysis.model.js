var db = require("../../config/db.config");
const analysis = function(){

}

analysis.getProductCategoryWithMostOrders = (product_id, result) => {
    const sqlSelect = "SELECT category_id, category_name, sum(quantity) AS orders_count    FROM shopay.category_subcategory inner join contains using (sub_category_id) inner join order_variant using(product_id) group by category_id ORDER BY orders_count DESC LIMIT 5  ;"
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

analysis.getCustomerDetails = (cust_id, result) => {
    const sqlSelect = "SELECT order_id,status,total_amount,DATE_FORMAT(order_date ,'%Y-%m-%d') AS order_date FROM shopay.customer_order inner join shopay.order using (order_id) where customer_id = ? ORDER BY order_id DESC ;"
    db.query(sqlSelect, [cust_id], (err, res) => {
        
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
analysis.getAllCustomerDetails = ( result) => {
    const sqlSelect = "SELECT order_id,status,total_amount,DATE_FORMAT(order_date ,'%Y-%m-%d') AS order_date FROM shopay.customer_order inner join shopay.order using (order_id)  ORDER BY order_id DESC ;"
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

analysis.BestProductInGivenTime = (start_date,end_date, result) => {
    const sqlSelect = "SELECT product_id,title,count(product_id) AS sales_count FROM product_order_stats WHERE order_date between ? and ? group by product_id order by sales_count DESC LIMIT 4 ;"
    db.query(sqlSelect, [start_date,end_date], (err, res) => {
        
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


module.exports = analysis;