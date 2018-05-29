const http = require('https');
const querystring = require('querystring');

const postData = querystring.stringify({
    'content': '还有深入的教程吗？',
    'cid': 637,
    'mid': 11548
})

const option = {
    hostname: 'www.imooc.com',
    port: 443,
    path: '/course/docomment',
    method: "POST",
    headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Connection': 'keep-alive',
        'Content-Length': postData.length,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'imooc_uuid=f6474077-d11e-4cca-afde-44d993aa2fbb; imooc_isnew_ct=1513590546; imooc_isnew=2; loginstate=1; apsid=Q4M2I2ZmZhYzFlYWY2YmIyMjczMjkzZDc1NjNiMGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANTY3MzQwMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGY2OTM4NTM0MDEwNWFmZmNmYWMwYzBhODY5OWQ4YmQ0fdf6Wn3X%2Blo%3DMD; PHPSESSID=enqn8to1qrq3cpbvppliqj6i63; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1526388600,1526472856; IMCDNS=0; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1526562512; cvde=5afc20981e4f2-80',
        'Host': 'www.imooc.com',
        'Origin': 'https://www.imooc.com',
        'Referer': 'https://www.imooc.com/video/8837',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
    }
}

var req = http.request(option, function (res) {
    console.log('状态码', res.statusCode);
    console.log("headers: " + JSON.stringify(res.headers))
    res.on('data', function (data) {
        console.log('评论中', data);
    });

    res.on('end', function () {
        console.log('评论完毕');
    })
})

req.on('error', function (e) {
    console.log('错误', e.message);
})

req.write(postData);
req.end();


// content: 视频还不错
// cid: 348
// mid: 8837