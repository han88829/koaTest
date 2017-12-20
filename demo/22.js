// 用node.js开启一个完整的服务器
var http = require('http');
var fs = require('fs');
var url = require('url');

// 创建服务器
http.createServer(function (req, res) {
    // 解析请求，包括文件名
    var pathname = url.parse(req.url).pathname;
    // 输出请求的文件名
    console.log("Request for " + pathname + "received");
    // 从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            res.writeHead(404, { 'Content-Type': "text/html" });
        } else {
            res.writeHead(200, { 'Content-Type': "text/html" });
            res.write(data.toString());

        }
        res.end();
    })
}).listen(8000);

console.log("项目运行在本地8000端口")