var db = require("../../config/db.config");

const User = function (user) {
    this.cus_id = user.cus_id;
};

//View user Details
User.getDetailsById = (cus_id, result) => {
    db.query(`SELECT * FROM customer WHERE cust_id = ?`,cus_id, (err, res) => {
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