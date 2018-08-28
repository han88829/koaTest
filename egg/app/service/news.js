'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
    async getNewsList() {
        // 获取新闻数据
        // egg封装curl
        try {
            const api = this.config.api + '/appapi.php?a=getPortalList&catid=20&page=1';
            let data = await this.ctx.curl(api);

            data = JSON.parse(data.data);

            return data.result
        } catch (error) {
            console.log('错误', error);
        }


        return [];
    }

    // 获取新闻详情
    async getNewsContent(id) {
        try {
            const api = this.config.api + '/appapi.php?a=getPortalArticle&aid=' + id;
            let data = await this.ctx.curl(api);

            data = JSON.parse(data.data);

            return data.result
        } catch (error) {
            console.log('错误', error);
        }


        return [];
    }
}

module.exports = NewsService;
