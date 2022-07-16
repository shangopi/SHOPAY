var db = require("../../config/db.config");
const order_model = require("../models/order.model");

exports.createOrderForUser = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

    const new_order = new order_model();
    
        new_order.delivery_method = req.body.delivery_method;
        new_order.payment_method = req.body.payment_method;
        new_order.city = req.body.city;
        new_order.zip_code = req.body.zip_code;
        new_order.is_user = "Yes";
        new_order.address_line1 = req.body.address_line1;
        new_order.address_line2 = req.body.address_line2;
        new_order.address_line3 = req.body.address_line3;
        new_order.user_id = req.body.user_id;
        new_order.phone = req.body.phone;
        new_order.product_arr = req.body.product_arr;
        new_order.variant_arr = req.body.variant_arr;
        new_order.quantity_arr = req.body.quantity_arr;
        new_order.price_arr = req.body.price_arr;
        new_order.total = req.body.total;

        // new_order.delivery_method = "poda delivery";
        // new_order.payment_method = "thara maddan";
        // new_order.city = "engayo";
        // new_order.zip_code = "30000";
        // new_order.is_user = "Yes";
        // new_order.address_line1 = "Keraliwaththai Lane";
        // new_order.address_line2 = "Thirunelveli East";
        // new_order.address_line3 = "Jaffna";
        // new_order.total = "10000";
        // new_order.user_id = "1";
        // new_order.product_arr = "1,2,3,4,";
        // new_order.variant_arr = "3,2,6,5,";
        // new_order.quantity_arr = '4,2,3,1,';
        // new_order.price_arr = '1231,1231,314.32,31.45,';

    order_model.createOrderForUser(new_order, (err, data) => {
        if (err)
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found order with id `
                });
            } else {
                res.status(500).send({
                    message: "Error order with id "
                });}
        else{
            res.send(data);
        }
    });

}
exports.createOrderForNonUser = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

    const new_order = new order_model();
    
        new_order.delivery_method = req.body.delivery_method;
        new_order.payment_method = req.body.payment_method;
        new_order.city = req.body.city;
        new_order.zip_code = req.body.zip_code;
        new_order.is_user = "No";
        new_order.address_line1 = req.body.address_line1;
        new_order.address_line2 = req.body.address_line2;
        new_order.address_line3 = req.body.address_line3;
        new_order.total = req.body.total;
        new_order.inp_name = req.body.inp_name;
        new_order.email = req.body.email;
        new_order.phone = req.body.phone;
        new_order.product_arr = req.body.product_arr;
        new_order.variant_arr = req.body.variant_arr;
        new_order.quantity_arr = req.body.quantity_arr;
        new_order.price_arr = req.body.price_arr;
        

        // new_order.delivery_method = "home delivery";
        // new_order.payment_method = "cash";
        // new_order.city = "kopay";
        // new_order.zip_code = "30000";
        // new_order.is_user = "No";
        // new_order.address_line1 = "Keraliwaththai Lane";
        // new_order.address_line2 = "Neervely South";
        // new_order.address_line3 = "Neervely";
        // new_order.total = "3000";
        // new_order.inp_name = "Abinesh";
        // new_order.email = "summa@gmail.com";
        // new_order.phone = "01324242";
        // new_order.product_arr = "1,2,3,4,";
        // new_order.variant_arr = "3,2,6,5,";
        // new_order.quantity_arr = '4,2,3,1,';
        // new_order.price_arr = '1231,1231,314.32,31.45,';

    order_model.createOrderForNonUser(new_order, (err, data) => {    
        if (err)
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: "Error 1 " + err
                });
            }
             else {
                res.status(500).send({
                    message: "Error " + err
                });}
        else{
            res.send(data);
        }
    });

}



exports.getCustomerOrder = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

    order_model.getCustomerOrder(req.query.id, (err, data) => {
        if (err)
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found order with id ${req.query.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error order with id " + req.query.id
                });}
        else{
            res.send(data);
        }
        
    });

}

exports.getOrderByID = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

    order_model.getOrderByID(req.query.id, (err, data) => {
        if (err)
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found order with id ${req.query.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error order with id " + req.query.id
                });}
       else{
        res.send(data);
       }
    });

}
exports.setState = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

    order_model.setState(req.query.id, (err, data) => {
        if (err)
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found order with id ${req.query.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error order with id " + req.query.id
                });}
       else{
        res.send(data);
       }
    });

}



