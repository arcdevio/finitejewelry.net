(function () {
'use strict';

	angular.module('Index', ['ngMaterial']).controller("IndexController",[IndexController]);

	function IndexController () {
		var self = this;
		var sort = {
			option: 'price',
			options: [
				{ value: 'price', text: 'Low-High'},
				{ value: '-price', text: 'High-Low'}
			]
		};
		var items = [
			{
				title: 'Silver Chain With Onyx',
				description: 'This chain has a classic style with with a bold undertone',
				price: 10
			},
			{
				title: 'Gold Chain With Onyx',
				description: 'This chain has a classic style with with a edgy feel',
				price: 20
			},
			{
				title: 'Silver Chain With Onyx',
				description: 'This chain has a classic style with with a bold undertone',
				price: 10
			},
			{
				title: 'Gold Chain With Onyx',
				description: 'This chain has a classic style with with a edgy feel',
				price: 20
			},
			{
				title: 'Silver Chain With Onyx',
				description: 'This chain has a classic style with with a bold undertone',
				price: 10
			},
			{
				title: 'Gold Chain With Onyx',
				description: 'This chain has a classic style with with a edgy feel',
				price: 20
			},
			{
				title: 'Silver Chain With Onyx',
				description: 'This chain has a classic style with with a bold undertone',
				price: 10
			},
			{
				title: 'Gold Chain With Onyx',
				description: 'This chain has a classic style with with a edgy feel',
				price: 20
			}
		];

		self.sort = sort;
		self.items = items;
	}

})();
