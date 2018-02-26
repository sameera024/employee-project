var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'root',
    database: 'employee'
});
con.connect(function (err) {
    if (err) throw err
    console.log('You are now connected...')
});
module.exports = con;