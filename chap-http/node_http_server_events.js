
// http module을 불러옴
var server = require("http").createServer();

// http server를 8080 포트로 시작함.
server.listen(8080, function() {
    console.log("Server is running...");
});

// 서버에 요청이 들어왔을 때 실행될 이벤트
server.on("request", function() {
    console.log("Server receive the request");
});

// 클라이언트가 서버로 접속했을 때 실행될 이벤트
server.on("connection", function() {
    console.log("Client connects to the server");
});

// 서버가 종료될 때 실행될 이벤트
server.on("close", function() {
    console.log("Server was stop");
});

// 서버가 실행되고 20초 뒤 서버를 종료시킴
setTimeout(function(){
    server.close();
}, 20000);
