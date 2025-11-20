const express = require("express");
const cors = require("cors");
const { authRoutes, performanceRoutes, paymentRoutes } = require("./routes/routeModule");
const { checkTokenExist } = require("./middlewares/tokenCheckMiddleware")

const app = express();

app.use("/auth/verify", checkTokenExist, authRoutes);
app.use("/auth", authRoutes); // http://localhost:3001/auth
app.use("/performance", checkTokenExist, performanceRoutes);
app.use("/payment", checkTokenExist, paymentRoutes);

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.listen(3001);