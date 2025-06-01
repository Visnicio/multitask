angular.module('multitask-front')
  .service('dashboardService', function($http) {
    
    this.getUserTasks = function() {
      return $http({
        method: 'GET',
        url: 'http://localhost/api/tasks/',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      });
    };

  });
