const http = require('http');

const hostname = '0.0.0.0';
const port = 5000;

const server = http.createServer((req, res) => {
    console.log("----> Have request");
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        remoteAddress:req.connection.remoteAddress,
        remotePort:req.connection.remotePort,
        localAddress:req.connection.localAddress,
        localPort:req.connection.localPort
    }));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
