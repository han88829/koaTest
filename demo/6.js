var fs = require("fs");
var data = "";

// 创建可读流
var reader = fs.createReadStream('demo/txt.txt');

// 创建可写

var edit = fs.createWriteStream("demo/edit.txt");


// 管道流   txt的复制到edit中

reader.pipe(edit);

console.log("管道流完成");