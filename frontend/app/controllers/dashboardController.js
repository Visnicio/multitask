angular.module('multitask-front')
  .controller('dashboardController', function($scope, dashboardService, tasksService, authService) {
    
    $scope.tasks = []; // An array of objects containing task data

    $scope.newTask = {
        title: "",
        description: "",
        due_date: ""
    };

    $scope.currentUser = authService.getCurrentUser();

    $scope.loadUserTasks = function($http){
        dashboardService.getUserTasks()
            .then(function(response) {
                $scope.tasks = response.data;
            })
            .catch(function(error) {
                console.error("Erro ao carregar tarefas:", error);
            });
    }

    $scope.createTask = function(newTask) {
        tasksService.createNewTask(newTask.title, newTask.description, newTask.due_date)
            .then(function(response) {
                $scope.loadUserTasks();
            })
            .catch(function(error) {
                console.error("Erro ao criar tarefa:", error);
            });
    };

    $scope.switchTaskStatus = function(taskId) {
        tasksService.switchTaskStatus(taskId)
            .then(function(response) {
                $scope.loadUserTasks();
            })
            .catch(function(error) {
                console.error("Erro ao alterar status da tarefa:", error);
            });
    };

    $scope.deleteTask = function(taskId) {
        tasksService.deleteTask(taskId)
            .then(function(response) {
                $scope.loadUserTasks();
            })
            .catch(function(error) {
                console.error("Erro ao excluir tarefa:", error);
            });
    };

    $scope.loadUserTasks();
  });
