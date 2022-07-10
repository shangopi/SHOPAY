var db = require("../../config/db.config");

const User = function (user) {
    this.cust_id = user.cust_id,
    this.first_name= user.first_name,
    this.last_name = user.last_name,
    this.telephone = user.telephone,
    this.email = user.email,
    this.address_line1 = user.address_line1,
    this.address_line2 = user.address_line2,
    this.address_line3 = user.address_line3,
    this.city = user.city,
    this.zip_code = user.zip_code,
    this.district = user.district,
    this.password  = user.password
};

//register
User.create = (newUser, result) => {
    db.query("INSERT INTO customer SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Entry Added: ",res.insertId);
        result(null, { cust_id: res.insertId});
    });
};

//View user Details ID
User.getDetailsById = (cust_id, result) => {
    db.query(`SELECT cust_id, first_name, last_name, telephone, email, address_line1, address_line2, address_line3, city, zip_code ,district FROM customer WHERE cust_id = ?`,cust_id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            console.log(err);
            return;
        }

        if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
            console.log(result);
            return;
        }
        result({ kind: "not_found" }, null);
    });
};

//View user Details by email
User.getDetailsByEmail = (email, result) => {
    db.query(`SELECT * FROM customer WHERE email = ?`,email, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }
        result({ kind: "not_found" }, null);
    });
};

module.exports = User;