'use strict';

angular.module('myApp', [
	'ngRoute',
	'myApp.home', // authorization module
	'myApp.register', // registration module
	'myApp.welcome', // module page after avtorezatsii
	'myApp.addPost' // module blog
]).
	config(['$routeProvider', function($routeProvider) {
		// Assign the default view
        $routeProvider.otherwise({
            redirectTo: '/home'
        });
	}])
