var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(result) {
        cb(result);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(burger_name, cb) {
      orm.insertOne("burgers", "burger_name", vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("cats", objColVals, condition, function(res) {
        cb(res);
      });
    },
    delete: function(condition, cb) {
      orm.delete("cats", condition, function(res) {
        cb(res);
      });
    }
  };
  
//   Export the database functions for the controller (burgers_controller.js).
  module.exports = burger;