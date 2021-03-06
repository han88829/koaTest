'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1535371630296_1830';

  // add your config here 配置中间件
  config.middleware = ['printdate', 'forbidip'];

  // 给printdate传递参数
  config.forbidip = {
    aaa: 1111
  }

  // 配置模板殷勤
  config.view = {
    mapping: {
      ".html": 'ejs',
    },
  };

  // 配置公共的url
  config.api = 'http://www.phonegap100.com';

  return config;
};
