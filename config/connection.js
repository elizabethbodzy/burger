var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "d6ybckq58s9ru745.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "x2l27lpb9f6j2l8j",
    password: "z3640j9vzc1w8egi",
    database: "dbti6ixj9sk361n8"
  });
}

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;