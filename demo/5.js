// Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）

var fs = require("fs");
var data = "";

// 创建可读流
var reader = fs.createReadStream('demo/txt.txt');

// 创建可写

var edit = fs.createWriteStream("demo/edit.txt");

reader.setEncoding("UTF8");

reader.on("data", (x) => {
    data += x;
});

reader.on("end", () => {
    console.log(data);
});

reader.on("err", (err) => {
    console.log(err.stack);
});

console.log("读写完毕");

var dataWrite = "node.js  操作文件";

edit.write(dataWrite, "UTF8");
edit.write("/n同时写入两个会换行吗？？？？？", "UTF8");

edit.end();

edit.on("finish", () => {
    console.log("写入执行完成");
});

edit.on("error", (err) => {
    console.log(err.stack);
});

console.log("写入完毕");

