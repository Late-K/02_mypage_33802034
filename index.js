var http = require("http");
const port = 8000;

http
  .createServer(function (req, res) {
    console.log(res);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
      "<!DOCTYPE html><html><head><title>My Page</title></head><body><h1>Hello World!</h1><p>This is my page.</p></body></html>"
    );
  })
  .listen(port, function () {
    console.log("Node server is running on https://localhost:" + port);
  });
