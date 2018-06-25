const koa = require('koa');

const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');

const app = new koa();

app.use(bodyParser({
    onerror: function (err, ctx) {
        ctx.throw('body parse error', 422);
    }
}));

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

router.post('/list', async (ctx) => {
    try {
        let data = await ctx.request.body;
        let str = '';
        ctx.req.on('data', (chunk) => {
            str += chunk;
        })
        ctx.req.on('end', () => {
            console.log(JSON.parse(str));
            ctx.body = str;
        })
        /*
        *   headers: {
        *        "Content-Type":"application/json"
        *    },
        *   前端请求header的content-type一定要设置对，否则会接收不到数据，
        */

    } catch (error) {
        console.log(error)
        ctx.body = 'error';

    }

})

app.use(router.routes()).use(router.allowedMethods());

app.listen(3001);

