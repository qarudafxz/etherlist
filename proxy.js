const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
	app.use(
		"/rpc",
		createProxyMiddleware({
			target: "http://localhost:7545", // Change this to your desired port
			changeOrigin: true,
		})
	);
};
