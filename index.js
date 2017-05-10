'use strict';

const Joi = require('joi');
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

server.route({
  method: 'POST',
  path: '/api/v1/hello-world/{name}',
  handler: (req, res) => {
    hello: `${req.params.name} ${req.payload.surname}`
  },
  config: {
    validate: {
      params: {
        name: Joi.string().required()
      },
      payload: Joi.object({
        surname: Joi.string().min(3).max(60).required()
      })
    }
  }
});

server.start(err => {
  if(err) throw err;

  console.log('Servidor iniciado em ', server.info.uri)
});
