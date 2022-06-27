const mysql = require("mysql");

//create connection
const db=mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'shopay',
  port:'3306'
})
//connect
db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("database connected successfully!!!!!");
  }
});

module.exports = db;
