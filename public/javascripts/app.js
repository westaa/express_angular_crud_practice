var app = angular.module('icecream', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '../views/icecreams.html',
    controller: 'icecreamController'
  })
  .when('/icecreams/new', {
    templateUrl: '../views/new.html',
    controller: 'icecreamController'
  })
})
