"use strict"
var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Azure Web App\n');
}).listen(port);

console.log("Server listening on: http://localhost:%s", port);
