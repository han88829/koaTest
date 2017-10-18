const Koa = require('koa');
const app = new Koa();
const fs = require('fs');//操作文件
const route = require('koa-route'); //封装号的koa路由，替代原声路由

const main = ctx => {
    // ctx.response.body = "Hello Koa!"; 默认返回的类型是 text/plain

    // 根据请求头返回不同的数据
    // if (ctx.request.accepts("xml")) {
    //     ctx.response.type = "xml";
    //     ctx.response.body = "<data>Hello XML</data>"
    // } else if (ctx.request.accept("json")) {
    //     ctx.response.type = "json";
    //     ctx.response.body = { data: "hello JSON" };
    // } else if (ctx.request.accepts('html')) {
    //     ctx.response.type = 'html';
    //     ctx.response.body = '<p>Hello World</p>';
    // } else {
    //     ctx.response.type = 'text';
    //     ctx.response.body = 'Hello World';
    // }

    /**
     * 获取网页模版并返回
     */
    // ctx.response.type = 'html';
    // ctx.response.body = fs.createReadStream('./demos/template.html');

    /**
     * 页面路由（使用原生）
     */
    // if (ctx.request.path !== "/") {
    //     ctx.response.type = "html"
    //     ctx.response.body = "<a href='http://h88829.top' target='_blank'>外部链接</a>"
    // } else {
    //     ctx.response.type = "html";
    //     ctx.response.body = "<a href='/index'>点击进入子页面</a>";
    // }

    /**
    * 页面路由（使用koa）&& 下方about
    */
    ctx.response.type = "html";
    ctx.response.body = "<a href='/about'>子页面</a>";
}

const about = ctx => {
    ctx.response.type = "html";
    ctx.response.body = "<a href='/'>主页面</a>";
}


app.use(route.get("/", main));
app.use(route.get("/about", about));

app.use(main);
app.listen(3000);
