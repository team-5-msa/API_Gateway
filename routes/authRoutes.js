require('dotenv').config();
const { createProxyMiddleware } = require("http-proxy-middleware");

const targetURL = "http://localhost:3002" || process.env.AUTH_SERVICE_URL;

const authRoutes = createProxyMiddleware({
    // target : http://localhost:3001/auth
    // http://localhost:3002
    target: targetURL,
    changeOrigin: true,
    // 에러 포멧
    
});

module.exports = authRoutes;