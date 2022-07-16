var db = require("../../config/db.config");

const order = function(){
}

order.createOrderForUser = (new_order, result) => {   
    
    const sqlSelect = "call insert_order_customer (@gdg,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
        db.query(sqlSelect, [new_order.delivery_method,new_order.payment_method,new_order.city,new_order.zip_code,new_order.is_user,new_order.address_line1 ,new_order.address_line2,new_order.address_line3,new_order.total,new_order.user_id,new_order.product_arr,new_order.variant_arr,new_order.quantity_arr,new_order.price_arr], (err, res) => {
            
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            result(null, new_order);
        })
    }

order.createOrderForNonUser = (new_order, result) => {   
    
const sqlSelect = "call insert_into_order (@gdg,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
    db.query(sqlSelect, [new_order.delivery_method,new_order.payment_method,new_order.city,new_order.zip_code,new_order.is_user,new_order.address_line1 ,new_order.address_line2,new_order.address_line3,new_order.total,new_order.inp_name,new_order.email,new_order.phone,new_order.product_arr,new_order.variant_arr,new_order.quantity_arr,new_order.price_arr], (err, res) => {
        
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, new_order);
    })
}

order.getCustomerOrder = (customer_id, result) => {
    const sqlSelect = "SELECT * FROM shopay.customer_order left join shopay.order using(order_id) where customer_id=?;"
    db.query(sqlSelect, [customer_id], (err, res) => {
        if (err) {
            result(null, err);
        }
        else if (res.length) {
            result(null, res);
        }
        else {
            result({ kind: "not_found" }, null);
        }
        console.log(result);
    })
}

order.getOrderByID = (order_id, result) => {
    const sqlSelect = "SELECT *, DATE_FORMAT(`shopay`.`order`.`order_date`,'%Y-%m-%d') AS `order_date` FROM shopay.order where order_id=?;"

    db.query(sqlSelect, [order_id], (err, res) => {
        if (err) {
            result(null, err);
        }
        else if (res.length) {
            const sql_query = "SELECT product_id,variant_id,quantity,title FROM shopay.order_variant natural join product where order_id =?;"
            db.query(sql_query, [order_id], (err, res1) => {
                if (err) {
                    result(null, err);
                }
                else if (res.length) {
                    res[0].products = res1;
                    result(null,res);

                }
                else{
                    result({ kind: "not_found" }, null);
                }             


            })
            
        }
        else {
            result({ kind: "not_found" }, null);
        }
       
    })
}
order.setState = (order_id, result) => {
    const sqlSelect = "call change_state(@gfgf,?);"
    db.query(sqlSelect, [order_id], (err, res) => {
        if (err) {
            result(null, err);
        }
        else if (res.length) {
            result(null, res);
        }
        else {
            result({ kind: "not_found" }, null);
        }
        console.log(result);
    })
}

module.exports = order;