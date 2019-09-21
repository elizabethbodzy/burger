var connection = require("./connection.js");

var orm = {
        selectAll: function(tableInput, cb) {
              // The last variable cb represents the anonymous function being passed from server.js
            var queryString = "SELECT * from ??";
            connection.query(queryString, [tableInput], function(err, result) {
                if (err) {
                    throw err;
                }
                cb(result);
            });
        },
        insertOne: function(tableInput, columnName, burgerName, cb) {
            var queryString = "INSERT INTO ?? (??) VALUES (?)";
            connection.query(queryString, [tableInput, columnName, burgerName], function(err, result) {
                if (err) {
                    throw err;
                }
                cb(result);
            });
        },
        updateOne: function(tableInput, updateColumnName, updateValue, id, cb) {
            var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
            connection.query(queryString, [tableInput, updateColumnName, updateValue, id, ], function(err, result) {
                if (err) {
                    throw err;
                }
                cb(result);
            });
        }
    };
    
    // Export ORM
    module.exports = orm;