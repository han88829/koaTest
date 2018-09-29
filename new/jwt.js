var Koa = require('koa');
var jwt = require('koa-jwt');
var jsonwebtoken = require('jsonwebtoken');

var app = new Koa();

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
    secret,
}).unless({
    path: [/\/register/, /\/login/],
}));



app.listen(3008);