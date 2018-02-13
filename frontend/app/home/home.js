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
  $scope.image = {
    src: "assets/img/angularjs+rails.jpg"
  };
  $http({
      method: 'GET',
      url: 'http://0.0.0.0:3000/home'
  }).then(function (success){
    $scope.message = success.data.message;

  },function (error){

  });
  $scope.isOpen = false;

    $scope.demo = {
      isOpen: false,
      count: 0,
      selectedDirection: 'right'
    };
}]);
