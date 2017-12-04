// 文件上传

var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/' }).array('image'));

// 犯了一个大错误，html只写了htm一直提示找不到文件
app.get('/demo/file.html', function (req, res) {
    res.sendFile(__dirname + "/" + "file.html");
})

app.post('/file', function (req, res) {
    console.log(req.files[0]);  //上传文件信息
    var des_file = __dirname + '/' + req.files[0].originalname;
    fs.readFile(req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            var response;
            if (err) {
                console.log('错误：' + err)
            } else {
                response = {
                    message: "文件上传成功！",
                    filename: req.files[0].originalname
                }
            }

            console.log(response);
            res.end(JSON.stringify(response))
        })
    })
})


var server = app.listen(8888, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用示例运行在" + port + "端口");
})