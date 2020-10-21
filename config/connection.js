var mysql = require("mysql");
require("dotenv").config();

var connection;

if (process.env.JAWSDB_URL) {
   connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
     connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: process.env.MYSQL_PW,
        database: "burgers_db"
    });
}
connection.connect(function (err){
    if (err){
        console.error(err.stack)
        return;
    }
console.log(connection.threadId + " hello losers.. I win")
})
;

module.exports = connection;