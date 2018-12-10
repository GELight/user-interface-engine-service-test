const restify = require('restify');
const config = require('./config.js');
const fetch = require('node-fetch');

console.log(config);

const server = restify.createServer({
  name: config.appName,
  version: config.version
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
    fetch('http://localhost:4000/ui', {
      method: 'post',
      body:    JSON.stringify(serviceData),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.text())
    .then(html => {
      response.send(html);
    })
    .catch(err => {
      console.error(err)
    });
  } else {
    response.send(serviceData);
  }
  
  return next();
});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});