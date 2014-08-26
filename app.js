var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hello World");
  response.end();
}).listen(process.env.PORT || 8888);
console.log("process.env.PORT:" + process.env.PORT);

