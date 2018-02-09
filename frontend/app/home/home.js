'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.message = "This is angular app.";
  $http.get("http://0.0.0.0:3000/home")
    .success(function(data) {
      $scope.message = data.message;
    });
}]);
