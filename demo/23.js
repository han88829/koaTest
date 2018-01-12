// mysql

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "banmaworks"
})

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (err, res, fileds) {
    if (err) throw error;

    console.log("数据库连接成功！", res[0].solution);
})


      