const errorFormatMiddleware = (req, res, next) => {
    const originalJson = res.json;

    res.json = function (data) {
        // success = false인 경우 → 에러 포맷으로 통일
        if (data && data.success === false) {
            const formatted = {
                success: false,
                error: {
                    service: req.originalUrl,
                    message: data.error || data.message || "UNKNOWN_ERROR",
                }
            };

            // 원래 status 유지
            return originalJson.call(this, formatted);
        }

        // success = true → 그대로 전달
        return originalJson.call(this, data);
    };

    next();
};

module.exports = { errorFormatMiddleware };