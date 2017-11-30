var express = require("express");
var app = express();

// 主页输出hello World
app.get('/', function (req, res) {
    console.log("主页get请求");
    res.end("hello Get")
})

// psot 请求
app.post('/', function (req, res) {
    console.log('post');
    res.end('post')

})

app.get("/list", function (req, res) {
    console.log("get list")
    res.end("get list")
})

var server = app.listen(8080, function (req, res) {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用示例访问在8080端口")
})