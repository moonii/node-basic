/**
 * Created by 김순곤 on 2016-09-28.
 */

// http module을 불러옴
var http = require("http");

// http server 를 만듬.
var server = http.createServer(function (request, response) {
    response.writeHead(302, {"Location": "http://www.google.com"});
    response.end();
});

// http server를 8080 포트로 시작함.
server.listen(8080);
