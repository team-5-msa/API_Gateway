require('dotenv').config();
const { createProxyMiddleware } = require("http-proxy-middleware");

const authRoutes = createProxyMiddleware({
    target: process.env.AUTH_SERVICE_URL,
    changeOrigin: true,
    // pathRewrite: {
    //     "^/auth": "",
    // }
});

module.exports = authRoutes;