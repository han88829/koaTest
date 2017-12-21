var express = require('express');
var app = express();
var fs = require('fs');

app.get('/detailUser/:id', function (req, res) {
    fs.readFile(__dirname + '/' + 'user.json', 'utf8', function (err, data) {
        data = JSON.parse(data);
        console.log(req.params)
        var user = data['user' + req.params.id];
        console.log(user);
        res.end(JSON.stringify(user));
    })
})

var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例运行在" + host + port);
})