/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    '/api.farm/': {
      target: 'https://api.fmg.net.cn/',
      changeOrigin: true,
      pathRewrite: {
        '^/api.farm': '',
      },
    },
    '/api.request': {
      target: 'https://order.kuaidi100.com/',
      pathRewrite: { '^/api.request': '' },
      changeOrigin: true,
    },
    '/api.poll': {
      target: 'https://poll.kuaidi100.com/',
      pathRewrite: { '^/api.poll': '' },
      changeOrigin: true,
    },
    '/api.loginCheck': {
      target: 'http://1.15.182.218:8080/',
      pathRewrite: { '^/api.loginCheck': '' },
      changeOrigin: true,
    },
    '/api.local': {
      target: 'http://192.168.163.1:8080/',
      pathRewrite: { '^/api.local': '' },
      changeOrigin: true,
    },
    '/api.case': {
      target: 'http://42.194.206.15:8000/',
      pathRewrite: { '^/api.case': '' },
      changeOrigin: true,
    },
  },
  test: {
    '/api/': {
      target: 'https://preview.pro.ant.design',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
  pre: {
    '/api/': {
      target: 'your pre url',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
};
