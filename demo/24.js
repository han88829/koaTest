// 操作数据库

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "root",
    port: '3306',
    database: "test"
});

connection.connect();

var sql = "SELECT * FROM websites";

// 查

// connection.query(sql, function (err, res) {
//     if (err) {
//         console.log("连接错误", err.message);
//         return
//     }
//     console.log('--------------------------SELECT----------------------------');
//     console.log(res);
//     console.log('------------------------------------------------------------\n\n');
// });

//增加
// var addsql = "INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)";
// var addSqlParams = ["菜鸟工具", "h88829.top", "123456", "cn"];

// connection.query(addsql, addSqlParams, function (err, res) {
//     if (err) {
//         console.log("连接错误" + err.message);
//         return
//     }
//     console.log('--------------------------INSERT----------------------------');
//     //console.log('INSERT ID:',result.insertId);        
//     console.log('INSERT ID:', res);
//     console.log('-----------------------------------------------------------------\n\n');

// })

//修改
// var modSql = "UPDATA websites SET name = ?,url = ? WHERE Id = ?";date 不是data
// var modSqlParams = ['测试修改', 'hello word！', 6];
// var modSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';
// var modSqlParams = ['测试修改', 'https://m.runoob.com', 7];

// connection.query(modSql, modSqlParams, function (err, res) {
//     if (err) {
//         console.log("发生错误" + err.message);
//         return
//     }

//     console.log('--------------------------UPDATE----------------------------');
//     console.log('UPDATE affectedRows', res.affectedRows);
//     console.log('-----------------------------------------------------------------\n\n');
// })

// 删除
// 循环不能使用
var dele = "DELETE FROM websites where id= ?";
let id = [3]
for (let index = 0; index < 2; index++) {
    connection.query(dele, id, function (err, res) {
        if (err) {
            console.log(err);
            return
        }

        console.log('--------------------------DELETE----------------------------');
        console.log('DELETE affectedRows', res.affectedRows);
        console.log('-----------------------------------------------------------------\n\n');
        console.log(id[0])
        id[0]++
    })

}
connection.end();


