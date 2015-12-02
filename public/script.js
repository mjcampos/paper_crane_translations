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