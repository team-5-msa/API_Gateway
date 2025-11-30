const { verifyToken } = require("../utils/jwtUtils");

const tokenVerifyMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "토큰이 존재하지 않습니다.",
        });
    }

    const decoded = verifyToken(token);

    if (!decoded) {
        return res.status(401).json({
            success: false,
            message: "유효하지 않은 토큰입니다.",
        });
    }

    // 다른 서비스들이 사용할 수 있게 req.user에 저장
    req.user = decoded;

    next();
};

module.exports = { tokenVerifyMiddleware };