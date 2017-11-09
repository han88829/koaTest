var fs = require('fs');

// 文件地址为绝对路径
// 阻塞
// var data = fs.readFileSync('demo/txt.txt');

// console.log(data.toString());
// console.log("程序执行结束");

// 非阻塞
fs.readFile("demo/txt.txt", (err, res) => {
    if (err) return console.log(err);
    console.log(res.toString());
});

console.log("程序执行完毕");