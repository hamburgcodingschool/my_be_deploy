const mysql = require("mysql");

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
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