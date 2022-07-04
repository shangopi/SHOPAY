var db = require("../../config/db.config");

const order = function(){
    this.order_id = order.order_id,
    this.delivery_method = order.delivery_method,
    this.payment_method = order.payment_method,
    this.order_date = order.order_date,
   // this.order_date = new Date().toLocaleString(),
   this.status = order.order_status,
    //this.status = "ordered",
    this.city = order.city,
    this.zip_code = order.zip_code,
    this.address_line1 = order.address_line1,
    this.address_line2 = order.address_line2,
    this.address_line3 = order.address_line3,
    this.total_amount = order.total_amount,
    this.name = order.name,
    this.email = order.email,
    this.mobile = order.mobile,
    this.order_items = order.order_items

}

order.createOrderForUser = (variant_id, result) => {
    
    const sqlSelect = "select variant_id,count,price,image from variant where variant_id=?;"
    db.query(sqlSelect, [variant_id], (err, res) => {
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

order.createOrderForNonUser = (variant_id, result) => {
    
    const sqlSelect = "select variant_id,count,price,image from variant where variant_id=?;"
    db.query(sqlSelect, [variant_id], (err, res) => {
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




module.exports = order;