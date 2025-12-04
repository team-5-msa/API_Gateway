const { createProxyMiddleware } = require("http-proxy-middleware");
require('dotenv').config();

const targetURL = "http://localhost:3004" || process.env.BOOKING_SERVICE_URL;

const bookingRoutes = createProxyMiddleware({
    target : targetURL,
    changeOrigin: true,
    // pathRewrite: {
    //   "^/booking": "",
    // }
});

module.exports = bookingRoutes;
