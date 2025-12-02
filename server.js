const express = require("express");
const cors = require("cors");
const { authRoutes, performanceRoutes, paymentRoutes, bookingRoutes } = require("./routes/routesModule");
const { tokenVerifyMiddleware } = require("./middlewares/tokenVerifyMiddleware");

const app = express();

app.use("/auth", authRoutes); // http://localhost:3001/auth
app.use("/performance", tokenVerifyMiddleware, performanceRoutes);
app.use("/payment", tokenVerifyMiddleware, paymentRoutes);
app.use("/booking", tokenVerifyMiddleware, bookingRoutes);

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.listen(3001);