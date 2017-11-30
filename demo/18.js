var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/demo/index.html', function (req, res) {
    res.sendFile(__dirname + "/" + 'index.html')
})

app.get('/process_get', function (req, res) {
    // 输出json格式
    var response = {
        "first_name": req.query.first_name,
        "last_name": req.query.last_name
    }

    console.log(response);
    res.end(JSON.stringify(response))
})

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("我运行在" + host + port)
})

// 这是get请求、下面开始写post请求