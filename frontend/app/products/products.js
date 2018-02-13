'use strict';

angular.module('myApp.products', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/products', {
    templateUrl: 'products/products.html',
    controller: 'ProductsCtrl'
  });

  $routeProvider.when('/products/new', {
    templateUrl: 'products/new.html',
    controller: 'ProductsNewCtrl'
  });
}])

.controller('ProductsCtrl', ['$scope','$http', function($scope, $http) {
  $scope.message = "This is angular app.";
  $http({
      method: 'GET',
      url: 'http://0.0.0.0:3000/products'
  }).then(function (success){
    $scope.products = success.data;

  },function (error){

  });
}])

.controller('ProductsNewCtrl', ['$scope','$http', '$location', function($scope, $http, $location) {
  $scope.name = "";
  $scope.price = 500;
  $scope.project = {
    description: 'This is the description of the product.',
    rate: 500,
    special: true
  };
  $scope.submit = function() {
    var product_params = JSON.stringify({name: $scope.name, price: $scope.price});

    $http.post("http://0.0.0.0:3000/products", product_params)
      .then(function(success) {
        console.log(success.data);
        alert("New product was successfully created!");
        $location.path("/products");
      }, function (error) {
        console.log(error);
      });
  };
}]);
