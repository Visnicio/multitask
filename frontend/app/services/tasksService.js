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

    this.switchTaskStatus = function(taskId) {
      return $http({
        method: 'POST',
        url: 'http://localhost/api/tasks/switchTaskStatus',
        data: {
          id: taskId
        },
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      });
    }

    this.deleteTask = function(taskId) {
      return $http({
        method: 'POST',
        url: 'http://localhost/api/tasks/deleteTask',
        data: {
          id: taskId
        },
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      });
    }

  });
