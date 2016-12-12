var pathname = window.location.pathname;

if (pathname === '/contact/' || pathname === '/contact') {
	Astatine.submit({
		query: '.contact-form',
		complete: function (error, success) {
			var response = document.querySelector('.response');

			if (error) {
				console.log(error);
				response.style.color = 'red';
				response.innerText = 'Error';
			} else {
				response.style.color = 'green';
				response.innerText = 'Success';
			}

		}
	});
}

function productsController ($scope, $http) {
	var self = $scope;

	self.title = 'All Jewelry';
	self.items = [];
	self.sort = {
		search: '',
		option: '-price',
		options: [
			{ value: 'price', text: 'Low-High'},
			{ value: '-price', text: 'High-Low'}
		]
	};

	$http.get('/products/index.json').then(
		function (success) {
			if (success.data) {
				self.items = success.data;
			} else {
				self.items = [];
			}
		},
		function (error) {
			console.log(error);
		}
	);

}

var productController = function ($scope, $http) {
	var self = $scope;
	var activeImage;
	var firstImage;
	var lastImage;
	var imagesLength = 0;

	self.activeImageIndex = 0;
	self.isMoreThanOneImage = false;

	self.setProduct = function (object) {
		self.product = object;
		self.title = self.product.title;
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

	$http.get('/products/index.json').then(
		function (success) {
			if (success.data) {
				self.items = success.data;
				var id = window.location.hash.replace('#/', '');
				for (var i = 0; i < self.items.length; i++) {
					var item = self.items[i];
					if (item._id === id) self.setProduct(item);
				}
			} else {
				self.item = {};
			}
		},
		function (error) {
			console.log(error);
		}
	);
};

var App = angular.module('master', ['ngRoute', 'ngMaterial', 'aseGallery', 'angularUtils.directives.dirPagination']);

App.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/all', {
		templateUrl : '/jewelry/jewelry-template.html',
		controller: ['$scope', '$http', productsController]
	})
	.when('/:id', {
		templateUrl : '/jewelry/product-template.html',
		controller: ['$scope', '$http', productController]
	});
}]);

App.controller('MasterController', [function () {
	var self = this;
	switch (pathname) {
		case '/': self.page = 'home';
			break;
		case '/jewelry': self.page = 'jewelry';
			break;
		case '/about': self.page = 'about';
			break;
		case '/gallery': self.page = 'gallery';
			break;
		case '/contact': self.page = 'contact';
			break;
		default: self.page = 'jewelry';
	}
}]);
