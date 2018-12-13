const ServerConfig = require('./server-config.js');
const express = require('express');
const orm = require('orm');
const router = require('./router');

const app = express();
// app.use(orm.express(dbPath, dbConfig));

router(app);

app.listen(ServerConfig.port, function () {
  console.log('Microservice "' + ServerConfig.name + '" is listening to http://localhost:' + ServerConfig.port);
});






/*

const server = restify.createServer({
  name: ServerConfig.app_name,
  version: ServerConfig.version
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

const mock = [
  {
    "id": "ds76s-ds78sd7-gf8f7",
    "type": "Unit",
    "units": [
      {
        "id": "ds76f-ds76fsd-ds7f6sd8f",
        "type": "TextField"
      },
      {
        "id": "sd8ds8-75ds7ds8sd-5sd78ds",
        "type": "Unit",
        "units": [
          {
            "id": "df78df-76df78d-f687df",
            "type": "TextField"
          }
        ]
      },
      {
        "id": "ds76sd-sd76sd-7df87f",
        "type": "Text"
      },
      {
        "id": "7sd5-78sd678-78s6d",
        "options": {
          "titel": "Lustiges Video",
          "description": "Ein cooles lustiges Video mit einem Hasen.",
          "path": "https://www.w3schools.com/html/mov_bbb.mp4",
          "resolution": "320x240",
          "runtime": "10.26s",
          "size": "131.509.108",
          "author": "Mario Linz",
          "intelligentSearchDepth": 5
        }
      }
    ]
  }
];

server.get('/description/:id', function(req, res, next) {
  
  const response = res;
  let serviceData = {};
  
  if (mock[req.params.id]) {
    serviceData = mock[req.params.id];
  }
  
  if (!req.header('user-interface-id')) {
    fetch('http://localhost:3000/ui', {
      method: 'post',
      body:    JSON.stringify(serviceData),
      headers: { 'Content-Type': 'text/html' },
    })
    .then(res => res.text())
    .then(html => {
      
      response.writeHead(200, {
        'Content-Length': Buffer.byteLength(html),
        'Content-Type': 'text/html'
      });
      response.write(html);
      response.end();

    })
    .catch(err => {
      console.error(err);
    });
  } else {
    response.send(serviceData);
  }
  
  return next();
});

server.listen(ServerConfig.port, function () {
  console.log('"%s" listening at %s', server.name, server.url);
  console.log(' Docker Container > http://localhost:' + 3001);
});
*/