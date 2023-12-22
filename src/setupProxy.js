const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api", {
            // "/api" 경로에 대한 요청을 프록시합니다.
            target: "https://moamoa.info", // 목표 서버 주소입니다.
            pathRewrite: {
                "^/api": "", // 프록시 경로를 제거합니다.
            },
            changeOrigin: true, // 호스트 헤더를 변경합니다.
        })
    );
};
