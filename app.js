
const Hapi = require('hapi');
const Routes = require('./routes');
const Registers = require('./registers')

const server = new Hapi.Server();

server.connection({ port: process.env.PORT || 8080 });
server.register(Registers, function(err){ if(err){ console.log(err) }});
server.route(Routes);

server.start(function () {
	console.log('Running on:', server.info.uri);
});
