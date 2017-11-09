var events = require("events");

var event = new events.EventEmitter();

event.on("some", (arg1, arg2) => {
    console.log("i/o 异步执行成功");
    console.log("参数一:" + arg1);
    console.log("参数二:" + arg2);
})

setTimeout(function () {
    event.emit("some", "没错我就是参数一", "我是二");
}, 1000);