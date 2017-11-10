//缓存区  Buffer

// 创建Buffer的三个方法
// var buf = new BUffer(10);
// var buf = new BUffer([10, 20, 30, 40, 50]);
// var buf = new Buffer("node.js BUffer", "utf-8");

// 写入缓存区

var buf = new Buffer(256);
var buf2 = new Buffer("2");
var len = buf.write("hello Buffer");

console.log("写入字数：" + len);

// 读取
console.log(buf);
console.log(buf.toString());
console.log(buf.toString("utf8", 0, 5));
buf.copy(buf2);
console.log(buf2.toString());