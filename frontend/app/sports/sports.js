'use strict';

angular.module('myApp.sports', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sports', {
    templateUrl: 'sports/sports.html',
    controller: 'SportsCtrl'
  });
}])

.controller('SportsCtrl', ['$scope','$http', function($scope, $http) {
  $scope.message = "This is angular app.";
  $http.get("http://0.0.0.0:3000/sports")
    .success(function(data) {
      $scope.message = data.message;
    });
}]);
