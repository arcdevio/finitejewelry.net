(function(){
'use strict';
	// 'ngSanitize'
	angular.module('master',['ngMaterial','angularUtils.directives.dirPagination']).controller('MasterController',['$sce','$http','$location','$timeout',MasterController]);

	function MasterController ($sce,$http,$location,$timeout) {
		var self = this;
		var pathname = window.location.pathname;

		/*
			header.marko
		*/
		switch (pathname) {
			case '/': self.page = 'home';
				break;
			case '/jewelry': self.page = 'jewelry';
				break;
			case '/about': self.page = 'about';
				break;
			case '/contact': self.page = 'contact';
				break;
			default: self.page = 'jewelry';

		}


		/*
			item.marko
		*/
		if (pathname != '/jewelry' && pathname != '/contact') {
			var activeImage;
			var firstImage;
			var lastImage;
			var imagesLength = 0;

			self.activeImageIndex = 0;
			self.product = null;
			self.isMoreThanOneImage = false;

			self.setProduct = function (object) {
				self.product = object;
				imagesLength = self.product.images.length;

				firstImage = 0;
				lastImage = imagesLength - 1;
				if (imagesLength > 1) self.isMoreThanOneImage = true;
			};


			self.setForwardImage = function () {
				if (imagesLength > 1) {
					activeImage = self.activeImageIndex;

					if (activeImage === lastImage) {
						activeImage = firstImage;
						self.activeImageIndex = activeImage;
					} else {
						self.activeImageIndex = activeImage + 1;
					}
				}
			};

			self.setBackwardImage = function () {
				if (imagesLength > 1) {
					activeImage = self.activeImageIndex;

					if (activeImage === firstImage) {
						activeImage = lastImage;
						self.activeImageIndex = activeImage;
					} else {
						self.activeImageIndex = activeImage - 1;
					}
				}
			};
		}


		/*
			jewelry.marko
		*/
		if (pathname === '/jewelry') {
			var sort = {
				search: '',
				option: 'price',
				options: [
					{ value: 'price', text: 'Low-High'},
					{ value: '-price', text: 'High-Low'}
				]
			};

			self.sort = sort;
			self.items = null;
			self.productsEmptyOrError = true;
			self.trustAsHtml = trustAsHtml;

			$http.get('/api/getAllProducts').then(
				function (success) {
					if (success.data) {
						self.items = success.data;
						self.productsEmptyOrError = false;
					} else {
						self.items = null;
						self.productsEmptyOrError = true;
					}
				},
				function (error) {
					console.log(error);
				}
			);

			var trustAsHtml = function (html) {
				return $sce.trustAsHtml(html);
			};
		}


		/*
			contact.marko
		*/
		if (pathname === '/contact') {
			self.sendingEmail = false;
			self.emailForm = null;
			self.responseText = '';

			self.submitEmail = function (emailForm) {
				if (self.emailForm) {
					self.sendingEmail = true;

					$http.post('/sendEmail', emailForm).then(
						function (success) {
							self.emailForm = null;
							self.responseText = success.data;
						},
						function (error) {
							console.log(error);
							self.responseText = error.data;
						}
					);

				}
			};
		}


	}
})();

// var items = [
	// {
	// 	"_id": ObjectID(),
	// 	"title": 'Silver Chain With Onyx',
	// 	"description": 'This chain has a classic style with with a bold undertone',
	// 	"price": 10,
	// 	"buyLink": 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BHUGERAYVVD5J',
	// 	"images": [
	// 		{ "src": '/products/1.jpg', "alt": '1', "index": 0}, { "src": '/products/2.jpg', "alt": '2', "index": 1},{ "src": '/products/3.jpg', "alt": '3', "index": 2}
	// 	]
	// },
	// {
	// 	"_id": ObjectID(),
	// 	"title": 'Gold Chain With Onyx',
	// 	"description": 'This chain has a classic style with with a bold undertone',
	// 	"price": 15,
	// 	"buyLink": 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BHUGERAYVVD5J',
	// 	"images": [
	// 		{ "src": '/products/1.jpg', "alt": '1', "index": 0}, { "src": '/products/2.jpg', "alt": '2', "index": 1},{ "src": '/products/3.jpg', "alt": '3', "index": 2}
	// 	]
	// },
	// {
	// 	"_id": ObjectID(),
	// 	"title": 'Silver Chain Black Stones',
	// 	"description": 'This chain has a classic style with with a bold undertone',
	// 	"price": 20,
	// 	"buyLink": 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BHUGERAYVVD5J',
	// 	"images": [
	// 		{ "src": '/products/1.jpg', "alt": '1', "index": 0}, { "src": '/products/2.jpg', "alt": '2', "index": 1},{ "src": '/products/3.jpg', "alt": '3', "index": 2}
	// 	]
	// },
	// {
	// 	title: 'Gold Chain With Onyx',
	// 	description: 'This chain has a classic style with with a edgy feel',
	// 	price: 20
	// },
	// {
	// 	title: 'Silver Chain With Onyx',
	// 	description: 'This chain has a classic style with with a bold undertone',
	// 	price: 10
	// },
	// {
	// 	title: 'Gold Chain With Onyx',
	// 	description: 'This chain has a classic style with with a edgy feel',
	// 	price: 20
	// },
	// {
	// 	title: 'Silver Chain With Onyx',
	// 	description: 'This chain has a classic style with with a bold undertone',
	// 	price: 10
	// },
	// {
	// 	title: 'Gold Chain With Onyx',
	// 	description: 'This chain has a classic style with with a edgy feel',
	// 	price: 20
	// },
	// {
	// 	title: 'Silver Chain With Onyx',
	// 	description: 'This chain has a classic style with with a bold undertone',
	// 	price: 10
	// },
	// {
	// 	title: 'Gold Chain With Onyx',
	// 	description: 'This chain has a classic style with with a edgy feel',
	// 	price: 20
	// }
// ];


//https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BHUGERAYVVD5J
