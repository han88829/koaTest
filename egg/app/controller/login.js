'use strict'

const Controller = require('egg').Controller;

class LoginController extends Controller {
    async index() {
        // const data = this.ctx.request.query;
        // console.log(data);
        this.ctx.body = '你好，这是登录界面！';
    }
}

module.exports = LoginController;