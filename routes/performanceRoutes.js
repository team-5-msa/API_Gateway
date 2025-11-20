const { createProxyMiddleware } = require("http-proxy-middleware");
require('dotenv').config();

const performanceRoutes = createProxyMiddleware({
    target : process.env.PERFORMANCE_SERVICE_URL,
    changeOrigin: true,
    // pathRewrite: {
    //     "^/performance": "",
    // }
});

module.exports = performanceRoutes;