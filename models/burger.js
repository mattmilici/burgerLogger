const orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, cb) {
        orm.insertOne(cols, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, cb) {
        orm.updateOne(objColVals, function(res) {
            cb(res);
        });
    },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;