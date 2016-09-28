
var http = require('http');

var _userCount = 0;

http.createServer(function (req, res) {
    _userCount++;

    res.writeHead(200);
    res.end('user count is ' + _userCount);
}).listen(8090, function () {
    console.log('server ready');
});