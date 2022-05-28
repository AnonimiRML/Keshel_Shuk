const twit = require('twit');
const http = require('http');


/* SERVER */

const port = process.env.PORT || 80

const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(port);

/* END SERVER */