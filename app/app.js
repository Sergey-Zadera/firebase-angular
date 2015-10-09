'use strict';

angular.module('myApp', [
	'ngRoute',
	'myApp.home', // модуль авторизации
	'myApp.register', // модуль регистрации
	'myApp.welcome',  // модуль страницы после авторезации
	'myApp.addPost' // модуль блог
]).
	config(['$routeProvider', function($routeProvider) {
		// назначаем представление по умолчанию
        $routeProvider.otherwise({
            redirectTo: '/home'
        });
	}])



