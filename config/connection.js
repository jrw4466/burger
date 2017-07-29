// Set up MySQL connection
var mysql = require("mysql");

// *****BEG Heruko Add ******
var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "Spurs2014$//",
		database: "burgers_db"
	});
};

//  *****END Heruko Add *****

// var connection = mysql.createConnection({
// 	port: 3306,
// 	host: "localhost",
// 	user: "root",
// 	password: "Spurs2014$//",
// 	database: "burgers_db"
// });


// Make connection
connection.connect(function(err) {
	if (err) {
		console.log("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use
module.exports = connection;
