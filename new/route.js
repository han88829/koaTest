const koa = require('koa');

const router = require('koa-router')();

const app = new koa();
router.get('', async (ctx) => {
    ctx.body = "hello koa!";
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(3001);