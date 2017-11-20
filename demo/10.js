var fs = require("fs");


// 先往文件中写入
var write = fs.createWriteStream("demo/txt.txt");
write.write("第二次添加", "UTF8");
write.end();

fs.readFile("demo/txt.txt", (err, data) => {
    if (err) {
        console.log(err);
    };
    console.log("异步读取文件完毕，文件内容：", data.toString());
})

// 同步读取
var data = fs.readFileSync("demo/txt.txt");

console.log("同步读取成功，文件内容：", data.toString());

console.log("文件执行完毕！");
