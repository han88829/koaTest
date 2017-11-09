var http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, { "Content_Type": "text/plain" });
    res.end("Hello word!")
}).listen(3000, "127.0.0.1")