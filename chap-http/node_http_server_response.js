/**
 * Created by 김순곤 on 2016-09-28.
 */
// http module을 불러옴
var http = require("http");

// http server 를 만듬.
var server = http.createServer(function (request, response) {
    // 응답헤더를 작성한다.
    response.writeHead(200, {"Content-Type": "text/html"});

    // 응답을 작성한다.
    response.end("<h1>Hello Web browser!</h1>");
});

// http server를 8080 포트로 시작함.
server.listen(8080);
