const checkTokenExist = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if(!token) {
        return res.status(401).json({
            message : "토큰이 존재하지 않습니다."
        })
    }

    next();
}

module.exports = { checkTokenExist }