// 创建目录

var fs = require("fs");

// console.log("创建开始");

// fs.mkdir("demo/创建", (err) => {
//     if (err) {
//         console.log(err);
//     }

//     console.log("创建成功！");
// })

// 删除目录

// fs.rmdir("demo/创建.txt", (err) => {
//     if (err) {
//         console.error(err);
//     };
//     console.log("目录删除成功！");
// })

// 读取目录

fs.readdir("demo", (err, data) => {
    if (err) {
        console.log(err);
    };
    data.forEach(x => {
        console.log(x);
    })
})