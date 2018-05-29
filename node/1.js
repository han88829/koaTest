const http = require('http');
const fs = require('fs');

//     if (err) console.log(err);

//     console.log(Buffer.isBuffer(data));

//     fs.writeFile('1(复制).png', data, function (err) {
//         if (err) console.log(err);
//     })

//     let Buffer64 = data.toString('base64');
//     console.log(Buffer64)
// })


// 流的方式读写文件

const read = fs.createReadStream('./img/72_d44dd012d99726330b5a561d2c7f8845.exe');
const write = fs.createWriteStream('./img/2.exe');

read.on('data', function (data) {
    if (write.write(data) === false) {
        console.log('正在缓存')
        read.pause();
    }
})

read.on('end', function () {
    write.end();
})

write.on('drain', function () {
    read.resume()
})