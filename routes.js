
module.exports = [
	{
		/*
			Serves static assets directory
		*/
		method: 'GET',
		path: '/static/{path*}',
		handler: { directory: { path: 'static' } }
	},
	{
		method: 'GET',
		path: '/',
		handler: function(req, res){
			var data = {
				includeName: '../includes/index.marko',
				title: 'Finite Designer Jewlery'
			};
			res.marko('template', data);
		}
	},
	{
		method: 'GET',
		path: '/jewelry',
		handler: function(req, res){
			var data = {
				includeName: '../includes/jewelry.marko',
				title: 'Jewelry | Finite Designer Jewlery'
			};
			res.marko('template', data);
		}
	},
	{
		method: 'GET',
		path: '/about',
		handler: function(req, res){
			var data = {
				includeName: '../includes/about.marko',
				title: 'About | Finite Designer Jewlery'
			};
			res.marko('template', data);
		}
	},
	{
		method: 'GET',
		path: '/contact',
		handler: function(req, res){
			var data = {
				includeName: '../includes/contact.marko',
				title: 'Contact | Finite Designer Jewlery'
			};
			res.marko('template', data);
		}
	},

];
