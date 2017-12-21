// 添加用户
var express = require('express');
var app = express();
var fs = require('fs');

// 添加新的用户数据
var user = {
    "user4": {
        "name": "mohit",
        "password": "password4",
        "profession": "teacher",
        "id": 4
    }
}

app.get('/addUser', function (req, res) {
    // 读取已存在的数据
    fs.readFile(__dirname + '/' + 'user.json', 'utf8', function (err, data) {
        data = JSON.parse(data);
        
        data["user4"] = user;
        console.log(data);
        res.end(JSON.stringify(data));
    })
})

var server = app.listen(8000, function () {
    var host = server.address().adress;
    var port = server.address().port;
    console.log("应用实例运行在" + host + port);
})
