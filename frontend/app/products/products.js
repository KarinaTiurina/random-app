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
  $http.get("http://0.0.0.0:3000/products")
    .success(function(data) {
      $scope.products = data;
    });
}])

.controller('ProductsNewCtrl', ['$scope','$http', '$location', function($scope, $http, $location) {
  $scope.name = "";
  $scope.price = 0;
  $scope.submit = function() {
    var product_params = JSON.stringify({name: $scope.name, price: $scope.price});

    $http.post("http://0.0.0.0:3000/products", product_params)
      .success(function(data, status, headers, config) {
        console.log(data);
        alert("New product was successfully created!");
        $location.path("/products");
      })
      .error(function(data, status, headers, config) {
        console.log("error");
      });
  };
}]);
