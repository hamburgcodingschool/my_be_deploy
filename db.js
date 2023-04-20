const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});
  
function getPeople(callback) {
    const sqlStatement = "SELECT * FROM people";
    connection.query(sqlStatement, function(err, results) {
        callback(results);
    });
}

module.exports = {
    getPeople
};