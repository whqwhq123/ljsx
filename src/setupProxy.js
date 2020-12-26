const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:9000',
      changeOrigin: true
    })
  );
  // http://localhost:9960
  app.use(
    '/graphiQL',
    createProxyMiddleware({
      target: 'http://localhost:9960',
      changeOrigin: true,
      pathRewrite: {
        '/graphiQL': '',     // 重写请求，
      },
    })
  );
};


