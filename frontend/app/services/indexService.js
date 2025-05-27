angular.module('multitask-front')
  .service('indexService', function($http) {
    this.getMessage = function() {
      return $http({
        method: 'GET',
        url: 'http://localhost/api/hello-world'
      });
    };
  });
