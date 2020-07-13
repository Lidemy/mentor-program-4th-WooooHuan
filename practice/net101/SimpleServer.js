const http = require('http');

function handleRequest(req, res) {
  if (req.url === '/') {
    res.write('welcome');
    res.end();
    return;
  }

  if (req.url === '/hello') {
    res.write('hello');
    res.end();
    return;
  }

  if (req.url === '/redirect') {
    res.writeHead(302, { Location: '/hello' });
    res.end();
    return;
  }

  res.writeHead(404);
  res.end();
}

const server = http.createServer(handleRequest);

server.listen(5000);
