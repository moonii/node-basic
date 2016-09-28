
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    var newFile = fs.createWriteStream('readme_copy.md');
    var fileBytes = req.headers['content-length'];
    var uploadBytes = 0;

    req.on('readable', function () {
        var chunk = null;
        while (null !== (chunk = req.read())) {
            uploadBytes += chunk.length;
            var progress = (uploadBytes/fileBytes)
        }
    });
}).listen(8090, function () {
    console.log('server ready on 8090');
});