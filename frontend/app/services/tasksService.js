angular.module('multitask-front')
  .service('tasksService', function($http) {
    const apiBase = 'http://localhost/api/tasks';
    const authHeader = {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    };

    this.createNewTask = function(title, description, due_date) {
      return $http.post(
        apiBase,
        { title, description, due_date },
        authHeader
      );
    };

    this.switchTaskStatus = function(taskId) {
      return $http.patch(
        `${apiBase}/switchTaskStatus`,
        { id: taskId },
        authHeader
      );
    };
    // Remove tarefa → DELETE /api/tasks/{id}
    this.deleteTask = function(taskId) {
      return $http.delete(
        `${apiBase}/${taskId}`,
        authHeader
      );
    };

    this.updateTask = function(taskId, title, description, due_date) {
      return $http.patch(
        `${apiBase}/${taskId}`,
        { title, description, due_date },
        authHeader
      );
    };
  });
