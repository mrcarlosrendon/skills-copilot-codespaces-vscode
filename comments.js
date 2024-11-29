// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(req, res) {
    var url_parts = url.parse(req.url, true);

    if (url_parts.pathname == '/') {
        fs.readFile('./index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else if (url_parts.pathname == '/comments') {
        fs.readFile('./comments.json', function(err, data) {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(data);
            res.end();
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('Page not found');
        res.end();
    }
});

server.listen(3000);
console.log('Server running at http://localhost:3000/');