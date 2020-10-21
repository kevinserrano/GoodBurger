  
var express = require("express");
var burgers = require("./models/burgers");


router.get("/", function(req,res) {
    connection.query("SELECT * FROM burgers", function (err,data){
      if (err) throw err;
      res.render("index", {burgers: data});
    });
  });

module.exports = router;