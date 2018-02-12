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
  $scope.image = {
    src: "assets/img/angularjs+rails.jpg"
  };
  $http({
      method: 'GET',
      url: 'http://0.0.0.0:3000/sports'
  }).then(function (success){
    $scope.message = success.data.message;

  },function (error){

  });
}]);
