var myApp = angular.module('myApp', ['ngRoute']);

// Clientside routing
myApp.config(function($routeProvider) {
	$routeProvider
	.when('/', {templateUrl: 'partials/english/profile.html'})
	.when('/english/services', {templateUrl: 'partials/english/services.html'})
	.when('/english/prices', {templateUrl: 'partials/english/prices.html'})
	.when('/english/contact_information', {templateUrl: 'partials/english/contact_information.html'})
	.when('/german/home', {templateUrl: 'partials/german/home.html'})
	.when('/german/payment', {templateUrl: 'partials/german/payment.html'})
	.when('/german/legal', {templateUrl: 'partials/german/legal.html'})
	.otherwise({redirectTo: '/'});
});