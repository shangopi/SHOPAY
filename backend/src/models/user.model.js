var db = require("../../config/db.config");

const User = function (user) {
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

        console.log("Entry Added: ");
        result(null, { cust_id: res.cust_id, ...newUser });
    });
};

//View user Details
User.getDetailsById = (cus_id, result) => {
    db.query(`SELECT first_name, last_name, telephone, email, address_line2, address_line2, address_line3, city, zip_code ,district FROM customer WHERE cust_id = ?`,cus_id, (err, res) => {
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

module.exports = User;