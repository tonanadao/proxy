var cors_proxy = require('cors-anywhere');
var fs = require('fs');

var host = process.env.HOST || 'sepezho.com';
var port = process.env.PORT || 5555;

cors_proxy.createServer({
    httpsOptions: {},
    originWhitelist: [],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});

