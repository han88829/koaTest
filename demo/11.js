// 文件
var fs = require("fs");

// 读取
fs.stat("demo/txt.txt", (err, data) => {
    console.log(data.isFile());
    console.log(data);
})

// 写入文件
fs.writeFile("demo/txt.txt", ",写入文件的信息放入这里", (err) => {
    if (err) {
        console.log(err);
    }

    console.log("写入成功！");

    fs.readFile("demo/txt.txt", (error, data) => {
        if (error) {
            console.log(error);
        }
        console.log("读取的文件内容" + data.toString());
    })
})

// 删除文件
fs.unlink("demo/txt.txt.gz", (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log("删除成功！");
})