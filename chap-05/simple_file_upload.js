/**
 * Created by user on 2016-09-13.
 */
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    var newFile = fs.createWriteStream('readme_copy.md');
    req.pipe(newFile);

    req.on('end', function () {
        res.end('uploaded..');
    });
}).listen(8090);
