angular.module('multitask-front', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/views/home.html',
      controller: 'indexController'
    })
    .when('/login', {
      templateUrl: 'app/views/login.html',
      controller: 'loginController'
    })
    .when('/dashboard', {
      templateUrl: 'app/views/dashboard.html',
      // controller: 'dashboardController'
    })
    .when('/register', {
      templateUrl: 'app/views/register.html',
    })
    .otherwise({
      redirectTo: '/'
    });
});