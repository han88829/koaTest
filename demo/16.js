// 使用express框架

var express = require('express');
var app = express();

app.get("/", (req, res) => {
    res.send("hello express!");
})

var server = app.listen(8088, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log(server.address());
    console.log(`应用访问在${host}的${port}端口`);
})