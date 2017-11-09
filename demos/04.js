const fs = require('fs');
const Koa = require('koa');
const app = new Koa();

// 打开本地的html webpack打包后的文件解析失败，暂时还未找到原因，期待进一步的解决。
const main = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = fs.createReadStream('./demos/template.html');
};

app.use(main);
app.listen(3000);
