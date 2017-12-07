// cookie
var express = require("express");
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', function (req, res) {
    console.log("Cookie:", req.cookies)
})

app.listen(8088, function () {
    console.log("项目运行在哪个端口呢")
})