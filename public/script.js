var myApp = angular.module('myApp', ['ngRoute']);

// Clientside routing
myApp.config(function($routeProvider) {
	$routeProvider
	.when('/', {templateUrl: 'partials/english/home.html'})
	.when('/english/payment', {templateUrl: 'partials/english/payment.html'})
	.when('/english/legal', {templateUrl: 'partials/english/legal.html'})
	.when('/german/home', {templateUrl: 'partials/german/home.html'})
	.when('/german/payment', {templateUrl: 'partials/german/payment.html'})
	.when('/german/legal', {templateUrl: 'partials/german/legal.html'})
	.otherwise({redirectTo: '/'});
});

// Factories
myApp.factory('mainFactory', function($http) {
	var factory = {};
	var page;

	factory.get_page = function(pageName) {
		page = pageName;
	};

	factory.currentPage = function(callback) {
		callback(page);
	};

	return factory;
})

// Controllers
myApp.controller("mainController", function($scope, mainFactory) {
	mainFactory.currentPage(function(data) {
		$scope.page = data;
	});

	console.log($scope.page);
});

myApp.controller("englishHomeController", function($scope, mainFactory) {
	var data = "english home";
	
	mainFactory.get_page(data);
});