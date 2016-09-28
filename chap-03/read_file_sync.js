
var fs = require('fs');

var contents = fs.readFileSync(__filename, 'utf-8');
console.log(contents);
console.log('Doing something else');