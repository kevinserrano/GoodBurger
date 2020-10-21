var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(newMeal, cb) {
        orm.insertOne(newMeal, function(res) {
            cb(res);
        });
    },
    updateOne: function(burgersId, cb) {
        orm.updateOne("burgers", function(res) {
            cb(res);
        });
    }
};
module.exports = burger;