angular.module('multitask-front')
  .controller('dashboardController', function($scope, dashboardService) {
    
    $scope.tasks = []; // An array of objects containing task data

    $scope.loadUserTasks = function($http){
        dashboardService.getUserTasks()
            .then(function(response) {
                $scope.tasks = response.data;
            })
            .catch(function(error) {
                console.error("Erro ao carregar tarefas:", error);
            });
    }

    $scope.createTask = function(title, description, due_date) {
        dashboardService.createNewTask(title, description, due_date)
            .then(function(response) {
                $scope.loadUserTasks();
            })
            .catch(function(error) {
                console.error("Erro ao criar tarefa:", error);
            });
    };

    $scope.loadUserTasks();
  });
