var mysql = require("mysql");

var database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Abdul_Alim_Rakib",
});


module.exports = database
