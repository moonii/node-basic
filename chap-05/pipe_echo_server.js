/**
 * Created by user on 2016-09-13.
 */
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200);
    req.pipe(res);
}).listen(8090);