var myApp = angular.module('myApp', ['ngRoute']);

// Clientside routing
myApp.config(function($routeProvider) {
	$routeProvider
	.when('/', {templateUrl: 'partials/english/profile.html'})
	.when('/english/services', {templateUrl: 'partials/english/services.html'})
	.when('/english/prices', {templateUrl: 'partials/english/prices.html'})
	.when('/english/contact_information', {templateUrl: 'partials/english/contact_information.html'})
	.when('/german/profil', {templateUrl: 'partials/german/profil.html'})
	.when('/german/service', {templateUrl: 'partials/german/service.html'})
	.when('/german/preise', {templateUrl: 'partials/german/preise.html'})
	.when('/german/kontakt', {templateUrl: 'partials/german/kontakt.html'})
	.otherwise({redirectTo: '/'});
});