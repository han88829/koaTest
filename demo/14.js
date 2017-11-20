// post 请求
var http = require("http");
var querystring = require("querystring");
var util = require("util");

// http.createServer((req, res) => {
//     // 定义一个post变量，用于暂存请求提的信息
//     var post = "";

//     // 通过req的data的事件监听函数，每当接受新的请求体的数据，就是累加到post变量中
//     req.on("data", (chunk) => {
//         post += chunk;
//     });

//     // end事件触发后，通过querystring.parse将post解析为真正的post请求格式，然后向客户端返回
//     req.on("end", () => {
//         post = querystring.parse(post);
//         // 返回的数据
//         res.end(util.inspect({ id: 1, name: 2, remark: "请求成功", r: post }));
//     })
// }).listen(3000)

var postHTML =
    '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

http.createServer(function (req, res) {
    var body = "";
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        // 解析参数
        body = querystring.parse(body);
        // 设置响应头部信息及编码
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' });

        if (body.name && body.url) { // 输出提交的数据
            res.write("网站名：" + body.name);
            res.write("<br>");
            res.write("网站 URL：" + body.url);
        } else {  // 输出表单
            res.write(postHTML);
        }
        res.end();
    });
}).listen(3000);
