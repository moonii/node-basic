/**
 * Created by 김순곤 on 2016-09-28.
 */

var http = require("http");
var url = require("url");

http.createServer(function (request, response) {

    // URL을 구분
    var path = url.parse(request.url).pathname;
    console.log(path);

}).listen(8080, function() {
    console.log("Server is running");
});
