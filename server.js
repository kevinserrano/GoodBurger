// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table")
require("dotenv").config();

var PORT = process.env.PORT || 3306;



app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handelbars");

app.get()




module.exports = express;
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
  