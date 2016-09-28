
// http module을 불러옴
var http = require("http");

// http server 를 만듬.
var server = http.createServer();

// http server를 8080 포트로 시작함.
server.listen(8080, function() {
    console.log("Server is running...");
});

// 서버가 종료될 때 실행될 이벤트
server.on("close", function() {
    console.log("Server was stop");
});

// 서버가 실행되고 5초 뒤 서버를 종료시킴
setTimeout(function(){
    server.close();
}, 5000);
