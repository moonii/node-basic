/**
 * Created by user on 2016-09-08.
 */

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200);
    res.write('Dog is running..');

    setTimeout(function () {
        res.write('Dog is done..');
        res.end();
    }, 5000);

    res.write('Dog is still running..');
}).listen(8090);

console.log('server ready on port 8090');