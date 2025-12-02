const { createProxyMiddleware } = require("http-proxy-middleware");
require('dotenv').config();

const bookingRoutes = createProxyMiddleware({
    target : process.env.BOOKING_SERVICE_URL,
    changeOrigin: true,
    // pathRewrite: {
    //   "^/booking": "",
    // }
});

module.exports = bookingRoutes;