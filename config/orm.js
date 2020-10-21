var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableData, cb) {
        let queryString = "SELECT * FROM " + tableData + ";";

        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res)
        });
    },
    insertOne: function(newMeal, cb) {
        let queryString = "INSERT INTO burgers (burger_name) VALUES ('" + newMeal + "');";

        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        })
    },
    updateOne: function(burgersId, cb) {
        let queryString = "UPDATE burgers SET devoured = true WHERE id = " + burgersId + ";";
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        })
    }
};

module.exports = orm;