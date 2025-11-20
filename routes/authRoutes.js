require('dotenv').config();
const { createProxyMiddleware } = require("http-proxy-middleware");

const authRoutes = createProxyMiddleware({
    // target : http://localhost:3001/auth
    // http://localhost:3002
    target: process.env.AUTH_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: function (path, req) {
        // /auth/verify 요청을 그대로 유지
        if (req.originalUrl.startsWith("/auth/verify")) {
            return "/verify"; 
        }

        // /auth/signup + /auth/login은 /auth 제거
        return path.replace(/^\/auth/, "");
    }

});

module.exports = authRoutes;