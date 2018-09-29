const koa = require('koa');

const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
var jwt = require('koa-jwt');
var jsonwebtoken = require('jsonwebtoken');

const app = new koa();

app.use(bodyParser({
    onerror: function (err, ctx) {
        ctx.throw('body parse error', 422);
    }
}));

// Custom 401 handling if you don't want to expose koa-jwt errors to users
app.use(function (ctx, next) {
    return next().catch((err) => {
        if (401 == err.status) {
            ctx.status = 401;
            ctx.body = 'Protected resource, use Authorization header to get access\n';
        } else {
            throw err;
        }
    });
});

const secert = 'jwt_secret';
app.use(jwt({
    secret: secert,
}).unless({
    path: [/\/register/, /\/login/],
}));

router.get('/', async (ctx) => {
    ctx.body = "你好 koa!";
})

router.get('/login', async (ctx) => {
    let data = await ctx.request.query;
    console.log(data);
    ctx.body = {
        status: 1,
        token: jsonwebtoken.sign({
            data: data,
            // 设置 token 过期时间
            exp: Math.floor(Date.now() / 1000) + (60 * 60), // 60 seconds * 60 minutes = 1 hour
        }, 'jwt_secret')
    };
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

