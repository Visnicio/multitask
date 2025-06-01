angular.module('multitask-front')
  .service('tasksService', function($http) {
    
    this.createNewTask = function(title, description, due_date) {
      return $http({
        method: 'POST',
        url: 'http://localhost/api/tasks/create',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        data: {
          title: title,
          description: description,
          due_date: due_date
        }
      });
    };

  });
