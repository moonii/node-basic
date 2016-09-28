
var http = require("http");
var fs = require("fs");
var url = require("url");
var querystring = require("querystring");

http.createServer(function (request, response) {
    // URL을 구분
    var path = url.parse(request.url).pathname;
    if ( path == "/" ) {
        fs.readFile("./http.form.html", function(error, data) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.end(data);
        });
    }
    else if ( path == "/doPost" ) {
        if ( request.method == "POST" ) {
            request.on("data", function(data) {
                console.log(data.toString());
                var requestParams = querystring.parse(data.toString());
                console.log(requestParams);
                console.log(requestParams.id + requestParams.password);
            });
        }
    }
}).listen(8080, function() {
    console.log("Server is running");
});
