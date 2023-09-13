//setupProxy.js

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/3.36.250.168:80", {
            target: "http://3.36.250.168:80",
            pathRewrite: {
                "^/3.36.250.168:80": "",
            },
            changeOrigin: true,
        })
    );
};
