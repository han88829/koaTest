// get 请求
var http = require('http');
var url = require("url");
var util = require('util');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    // res.end(util.inspect(url.parse(req.url, true)));

    // 获取url参数
    var data = url.parse(req.url, true).query;
    res.write("姓名：" + data.name);
    res.write("\n");
    res.write("年龄：" + data.age);
    res.end();
}).listen(3000)