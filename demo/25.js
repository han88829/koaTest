// MongoDB


// 创建链接
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27107/mydb';

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("数据库已创建");
    db.close();
})
 