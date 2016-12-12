var SendGridTransport = require('nodemailer-sendgrid-transport');
var ObjectId = require('mongodb').ObjectID;
var MongoClient = require('./database');
var Nodemailer = require('nodemailer');

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
			res.view('template', data);
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
			res.view('template', data);
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
			res.view('template', data);
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
			res.view('template', data);
		}
	},
	{
		method: 'GET',
		path: '/gallery',
		handler: function(req, res){
			var data = {
				includeName: '../includes/gallery.marko',
				title: 'Gallery | Finite Designer Jewlery'
			};
			res.view('template', data);
		}
	},
	{
		method: 'GET',
		path: '/jewelry/{id}',
		handler: function (req, res) {
			var id = new ObjectId(req.params.id);
			var products = MongoClient.db().collection('products');

			products.findOne({ _id: id }, function (error, result) {
				if (error) throw error;

				var data = {
					includeName: '../includes/product.marko',
					title: result.title + ' | Finite Designer Jewlery',
					product: JSON.stringify(result)
				};
				res.view('template', data);
			});

		}
	},
	{
		method: 'GET',
		path: '/success',
		handler: function(req, res){
			var data = {
				includeName: '../includes/thanks.marko',
				title: 'Success | Finite Designer Jewlery'
			};
			res.view('template', data);
		}
	},
	{
		method: 'GET',
		path: '/cancel',
		handler: function(req, res){
			var data = {
				includeName: '../includes/thanks.marko',
				title: 'Cancel | Finite Designer Jewlery'
			};
			res.view('template', data);
		}
	},
	{
		method: 'POST',
		path: '/sendEmail',
		handler: function (req, res) {
			var payload = req.payload;

			var options = {
				auth: {
					api_key: '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'
				}
			}

			var transport = Nodemailer.createTransport(SendGridTransport(options));

			var email = {
				from: 'Finite <contact.form@finitejewelry.net>',
				to: 'finitedesignerjewelry@gmail.com',
				subject: 'Finite Inquiry',
				html: 'First Name: '+ payload.firstname+'<br>'+'Last Name: ' + payload.lastname + '<br>' + 'Phone: ' + payload.phone + '<br>' + 'Email: ' + payload.email + '<br>'+'Message: ' + payload.message
			};

			transport.sendMail(email, function (error, info) {
				if (error) {
					console.log(error);
					return res(error);
				} else {
					console.log(info);
					return res('Your Inquiry Was Sent');
				}
			});
		}
	},
	{
		method: 'GET',
		path: '/api/getAllProducts',
		handler: function (req, res) {

			// dev data
			// res(require('./dummydata'));

			var products = MongoClient.db().collection('products');
			products.find().toArray(function(error, result) {
				if (error) throw error;
				res(result);
			});
		}
	}

];