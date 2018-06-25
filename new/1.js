const koa = require('koa');

const router = require('koa-router')();

const app = new koa();

router.get('/', async (ctx) => {
    ctx.body = "你好 koa!";
})

router.get('/test/:id', async (ctx) => {
    // 去读get传值
    let data = ctx.query;
    console.log(typeof data);
    console.log(ctx.params.id);
    ctx.body = `你传入的id是${data.id}`;
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(3001);