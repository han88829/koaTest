var express = require('express');
var app = express();
var fs = require('fs');

app.get('/deleteUser/:id', function (req, res) {
    fs.readFile(__dirname + '/' + 'user.json', 'utf8', function (err, data) {
        data = JSON.parse(data);
        delete data['user' + req.params.id];
    })
})