var Hapi = require('hapi');
var Routes = require('./routes');
var Marko = require('marko');
var Registers = require('./registers');
var MongoClient = require('./database');

MongoClient.connect(function () {
	console.log('MongoDb Connected');
});

var server = new Hapi.Server();

server.connection({ port: process.env.alive_port });
server.register(Registers, function(error){ if(error){ console.log(error); }});

server.views({
	engines: {
		marko: {
			compile: function (src, options) {
				var template = Marko.load(options.filename, src);

				return function (context) {
					return template.renderSync(context);
				};
			}
		}
	},
	path: __dirname + '/templates'
});

server.route(Routes);

server.start(function () {
	console.log('Running on:', server.info.uri);
});
