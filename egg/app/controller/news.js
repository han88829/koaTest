'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
    async index() {
        const data = [1, 2, 3, 4, 5, 6,];
        // 这是异步方法，await执行
        await this.ctx.render('news', { data });
    }
}

module.exports = NewsController;
