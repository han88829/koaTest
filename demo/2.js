// 引入事件模块
var events = require('events');

var eventEmitter = new events.EventEmitter();

var contect = () => {
    console.log("链接成功！");

    eventEmitter.emit("data_received");
}

eventEmitter.on("contect", contect)

eventEmitter.on("data_received", () => {
    console.log("数据接收成功！")
})

eventEmitter.emit("contect");

console.log("程序执行完毕！");