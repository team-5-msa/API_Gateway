const { createProxyMiddleware } = require("http-proxy-middleware");
require('dotenv').config();

const paymentRoutes = createProxyMiddleware({
    target : process.env.PAYMENT_SERVICE_URL,
    changeOrigin: true,
    // pathRewrite: {
    //   "^/payment": "",
    // }
});

module.exports = paymentRoutes;