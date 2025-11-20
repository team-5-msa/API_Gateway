const express = require("express");
const cors = require("cors");
const { authRoutes, performanceRoutes, paymentRoutes } = require("./routes/routeModule");

const app = express();

app.use("/auth", authRoutes);
app.use("/performance", performanceRoutes);
app.use("/payment", paymentRoutes);

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.listen(3001);