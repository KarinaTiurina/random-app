'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'ngMdIcons',
  'myApp.home',
  'myApp.sports',
  'myApp.products',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', '$mdThemingProvider', function($locationProvider, $routeProvider, $mdThemingProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});

  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
}])

.controller('AppCtrl', ['$scope', '$location', function($scope, $location) {
   $scope.currentNavItem = 'page1';

  $scope.goto = function(page) {
    $location.path(page);
  };
}]);
