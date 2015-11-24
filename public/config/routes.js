var myApp = angular.module('myApp', ['ngRoute']);

// Clientside routing
myApp.config(function($routeProvider) {
	$routeProvider
	.when('/', {templateUrl: 'partials/english.html'})
	.when('/german', {templateUrl: 'partials/german.html'})
	.otherwise({redirectTo: '/'});
});