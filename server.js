// Dependencies
var express = require("express");
var mysql = require("mysql");

const exphbs = require("express-handlebars");

const connection = require("./config/connection");
const app = express();
const PORT = process.env.PORT || 3006;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


app.get("/", function(req,res) {
  connection.query("SELECT * FROM burgers", function (err,data){
    if (err) throw err;
    res.render("index", {burgers: data});
  });
});

app.post("/", function(req, res) {
  connection.query("INSERT INTO burgers (burgers_name) VALUES (?)", [req.body.burgers_name], function(err, result) {
    if (err) throw err;

    res.redirect("/");
  });
});






app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
  module.exports = express;
  