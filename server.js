// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table")
require("dotenv").config();

var port = process.env.PORT || 3306;



app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handelbars");







app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  