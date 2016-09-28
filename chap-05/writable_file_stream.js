/**
 * Created by user on 2016-09-13.
 */
var fs = require('fs');

var stream = fs.createWriteStream(__dirname + '/out.txt');

var interval = setInterval(function() {
    stream.write('tick ' + Date.now() + '\n');
}, 100);

setTimeout(function() {
    clearInterval(interval);
    stream.end();
}, 4950);