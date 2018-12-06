var restify = require('restify');
 
const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});
 
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
 
server.get('/user/:name', function (req, res, next) {
  res.send(req.params);
  return next();
});

server.get('/template/:name', function (req, res, next) {
  
  var body = '<html><body>' + req.params.name + '</body></html>';
  res.writeHead(200, {
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/html'
  });
  res.write(body);
  res.end();

  return next();
});

 
server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});