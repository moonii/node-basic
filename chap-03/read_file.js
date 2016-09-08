/**
 * Created by user on 2016-09-08.
 */

var fs = require('fs');

fs.readFile(__filename, 'utf-8', function (err, fileContent) {
    if (err) {
        console.err(err);
    }
    else {
        console.log('got file content: ', fileContent);
    }
});
