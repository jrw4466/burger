// Import the ORM to create functions that will interact with the database
var orm = require("../config/orm.js");

var burgerModel = {
	all: function(cb) {
		orm.all("burgers", function(res) {
			cb(res);
		});
	},
	create: function(cols, vals, cb) {
		orm.create("burgers", cols, vals, function(res) {
			cb(res);
		});
	},
	update: function(objColVals, condition, cb) {
		orm.update("burgers", objColVals, condition, function(res) {
			cb(res);
		});
	}
};

// Export the databasae functions for the controller (burgerController.js)
module.exports = burgerModel;