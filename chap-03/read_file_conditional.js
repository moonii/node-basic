
var fs = require('fs');

fs.stat(__filename,  function (err, stats) {
    if (err) {
        console.err('error occurred');
    }
    else {
        if (stats.size < 1024) {
            fs.readFile(__filename, 'utf-8', function (err, contents) {
                if (err) {
                    console.err(err);
                }
                else {
                    console.log('got file contents: ', contents);
                }
            });
        }
    }
});