const http = require("http")
const hostname = ("127.0.0.1")
const port = ("3000")
const fs = require("fs")
const requestListener = function(req,res) {
    res.writeHead(200, {'content-type': 'text/html'});
    fs.createReadStream('home.html').pipe(res)
    res.end("My First Server");
}

const server = http.createServer(requestListener);
    server.listen(port,hostname,() => {
    });

