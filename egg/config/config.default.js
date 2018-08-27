'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1535371630296_1830';

  // add your config here
  config.middleware = [];

  // 配置模板殷勤
  config.view = {
    mapping: {
      ".html": 'ejs',
    },
  };
  return config;
};
