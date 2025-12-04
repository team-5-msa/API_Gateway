const { createProxyMiddleware } = require("http-proxy-middleware");
require('dotenv').config();

const targetURL = "http://localhost:3005" || process.env.PAYMENT_SERVICE_URL;

const paymentRoutes = createProxyMiddleware({
    target : targetURL,
    changeOrigin: true,
    // pathRewrite: {
    //   "^/payment": "",
    // }
});

module.exports = paymentRoutes;