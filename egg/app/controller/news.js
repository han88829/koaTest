'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
    async index() {
        const list = await this.service.news.getNewsList();
        const user = await this.service.user.getUserInfo();
        console.log(list);

        // 这是异步方法，await执行
        await this.ctx.render('news', { list, user });
    }


    async content() {
        const id = await this.ctx.query.aid;
        let data = await this.service.news.getNewsContent(id);
        // console.log(data[0]);
        await this.ctx.render('newcontent', { data });
    }
}

module.exports = NewsController;
