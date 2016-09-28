
var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer(function (request, response) {

    // URL을 구분
    var path = url.parse(request.url).pathname;
    console.log(path);

    // Root로 접속하거나 /index로 접속했을 때
    if ( path == "/" || path == "/index" ) {
        if ( request.method == "POST" ) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.end("환영합니다!");
        }
        else {
            response.writeHead(403, {"Content-Type": "text/html"});
            response.end("잘못된 요청입니다.");
        }

    }
}).listen(8080, function() {
    console.log("Server is running");
});
