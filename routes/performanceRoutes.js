const { createProxyMiddleware } = require("http-proxy-middleware");
require('dotenv').config();

const targetURL = "http://localhost:3003" || process.env.PERFORMANCE_SERVICE_URL;

const performanceRoutes = createProxyMiddleware({
    target : targetURL,
    changeOrigin: true,
    // pathRewrite: {
    //     "^/performance": "",
    // }
});

module.exports = performanceRoutes;