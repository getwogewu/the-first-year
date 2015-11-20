var http = require("http");
var fs = require('fs');

http.createServer(function (req, res) {

  
  if (req.url == "/") {
    fs.readFile("index.html","UTF-8", function (err, data) {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(data);
    });
  }

 
  else if (req.url == "/about") {
    fs.readFile("index1.html","UTF-8", function (err, data) {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(data);
    });
  }

  // 404错误
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 error! File not found.");
  }

}).listen(1112, "127.0.0.1");