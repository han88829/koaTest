// 屏蔽指定ip


module.exports = (options, app) => {



    // 返回一个异步的方法
    return async function forbidIp(ctx, next) {
        const ip = "127.0.0.1";

        let dataIp = ctx.request.ip;
        await next();
    }

}