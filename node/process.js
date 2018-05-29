process.stdin.on('data',(data)=>{
    process.stdout.write(`输入的${data}太复杂了，我看不懂`);
})