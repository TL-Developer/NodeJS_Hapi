'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({ port: 8080, host: '0.0.0.0' });

server.route({
  method: 'GET',
  path: '/',
  handler: (req, res) => res({
    hello: 'world'
  })
});

server.start(err => {
  if(err) throw err;

  console.log('Servidor iniciado em ', server.info.uri)
});
