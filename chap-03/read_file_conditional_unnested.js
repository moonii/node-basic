
var fs = require('fs');

function statsCallback (err, stats) {
    if (err) {
        console.err(err);
    }
    else {
        if (stats.size < 1024) {
            fs.readFile(__filename, 'utf-8', readFileCallback);
        }
        else {
            console.log('Didn\'t read the file. It was too long');
        }
    }
}

function readFileCallback(err, content) {
    if (err) {
        console.err(err);
    }
    else {
        console.log('Got the contents: ',  content);
    }
}

fs.stat(__filename, statsCallback);