/**
 * Created by user on 2016-09-08.
 */

var http = require('http');

var server = http.createServer();

server.on('request', function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain'});
    res.write('Hello, World!');
    res.end();
});

var port = 8090;
server.listen(port);
server.once('listening', function () {
    console.log('Hello world server listening on port %d', port);
});
