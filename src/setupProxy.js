const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://shlokverma9828.pythonanywhere.com', // Target API server
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Remove /api prefix when forwarding to the server
      },
      secure: false, // Disable SSL verification if necessary
      logLevel: 'debug',
      onProxyReq: (proxyReq, req, res) => {
        // Set proxy headers if necessary
        proxyReq.setHeader('Proxy-Authorization', 'Basic ' + Buffer.from('username:password').toString('base64')); // Example for basic auth, remove if not needed
      },
      onError: (err, req, res) => {
        console.error('Proxy error', err);
        res.status(500).send('Proxy error');
      },
      proxyTimeout: 5000, // Set proxy timeout in milliseconds
      followRedirects: true, // Follow HTTP 3xx responses as redirects
      agent: new require('http').Agent({
        proxy: {
          host: 'proxy.server', // Your proxy server
          port: 3128, // Your proxy port
          protocol: 'http:', // or 'https:'
        }
      })
    })
  );
};
