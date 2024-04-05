const database = require("../config/DBConfig");

database.connect((err) => {
  if (err) console.log("error :", err);
  else {
    let userSql =
      "CREATE TABLE IF NOT EXISTS user (id INT AUTO_INCREMENT PRIMARY KEY, firstName VARCHAR(100) NOT NULL, lastName VARCHAR(50), email VARCHAR(150), country VARCHAR(50) NOT NULL, city VARCHAR(50) NOT NULL)";
    let jobPostSql =
      "CREATE TABLE IF NOT EXISTS jobPost (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(100) NOT NULL, salary INT, company VARCHAR(150), country VARCHAR(50) NOT NULL, city VARCHAR(50) NOT NULL, type VARCHAR(50) NOT NULL)";
    database.query(userSql, (err, result) => {
      if (err) {
        console.log("error :", err);
      } else {
        console.log("user table created successfully.");
      }
    });
    database.query(jobPostSql, (err, result) => {
      if (err) {
        console.error("Error creating jobPost table:", err);
      } else {
        console.log("jobPost table created successfully.");
      }
    });
  }
});
