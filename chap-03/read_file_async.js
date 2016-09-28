
var fs = require('fs');

fs.readFile(__filename, 'utf-8', function (err, fileContent) {
    if (err) {
        console.err(err);
    }
    else {
        console.log('got file content: ', fileContent);
    }
});
console.log('Doing something else');