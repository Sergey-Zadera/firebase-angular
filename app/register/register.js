'use strict';

angular.module('myApp.register', ['ngRoute', 'firebase'])

// Declared route
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/register', {
        templateUrl: 'register/register.html',
        controller: 'RegisterCtrl'
    });
}])

// Register controller
.controller('RegisterCtrl', ['$scope', '$firebaseAuth', '$location', function($scope, $firebaseAuth, $location) {
	var firebaseObj = new Firebase("https://glowing-fire-8820.firebaseio.com");
	var auth = $firebaseAuth(firebaseObj);


	$scope.SignIn = function() {
		if (!$scope.regForm.$invalid) {
			console.log('Valid form submission');
			var email = $scope.user.email;
        	var password = $scope.user.password;
        	
        	if (email && password) {
            	auth.$createUser(email, password)
                	.then(function() {
                    	// do things if success
                    	console.log('User creation success');
                    	$location.path('/home');

                	}, function(error) {
                    	// do things if failure
                    	console.log(error);
                    	$scope.regError = true;
                    	$scope.regErrorMessage = error.message;
                	});
	        }
		}
	};
}]);
