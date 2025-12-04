const { verifyToken } = require("../utils/jwtUtils");

const tokenVerifyMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "TOKEN_NOT_EXIST",
        });
    }

    const decoded = verifyToken(token);

    if (!decoded) {
        return res.status(401).json({
            success: false,
            message: "INVALID_TOKEN",
        });
    }

    // 다른 서비스들이 사용할 수 있게 req.user에 저장
    req.user = decoded;

    next();
};

module.exports = { tokenVerifyMiddleware };