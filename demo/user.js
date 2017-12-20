var express = require('express');
var app = express();
var fs = require('fs');

app.get('/listusers', function (req, res) {
    fs.readFile(__dirname + '/' + 'user.json', "utf8", function (err, data) {
        console.log(data);
        res.end(data.toString());
    })
});

var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例访问地址：" + host + port)
})