const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, process.argv[2] || "./");

function onReadDir(target, deep) {
    const dirInfo = fs.readdirSync(target);
    let level = new Array(deep + 1).join('│  ')

    let dirs = [];
    let files = [];

    // 遍历获取到的文件夹
    dirInfo.forEach(item => {
        var stat = fs.statSync(path.join(target, item));

        // 判断是否是文件夹
        if (stat.isDirectory()) {
            dirs.push(item);
        } else {
            files.push(item);
        }
    });


    var next = deep + 1;
    // 遍历文件夹并递归出里面的文件
    dirs.forEach(item => {
        console.log(`${level}├─ ${item}`);
        onReadDir(path.join(target, item), next);
    })

    // 遍历文件列表
    files.forEach((item, index) => {
        if (index === (files.length - 1)) {
            console.log(`${level}└─ ${item}`);
        } else {
            console.log(`${level}├─ ${item}`);
        }
    })
}

onReadDir(target, 0);