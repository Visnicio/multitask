angular.module('multitask-front')
  .controller('dashboardController', function($scope, dashboardService, tasksService, authService) {

    $scope.tasks = [];
    $scope.newTask = { id: null, title: "", description: "", due_date: "" };
    $scope.currentUser = authService.getCurrentUser();
    $scope.modalTitle  = "";
    $scope.modalButton = "";

    $scope.loadUserTasks = function() {
      dashboardService.getUserTasks()
        .then(function(response) {
          $scope.tasks = response.data.map(function(t) {
            if (t.due_date) {
              t.due_date = new Date(t.due_date);
            }
            return t;
          });
        })
        .catch(function(error) {
          console.error("Erro ao carregar tarefas:", error);
        });
    };

    $scope.openCreateModal = function() {
      $scope.modalTitle  = "Nova Tarefa";
      $scope.modalButton = "Criar";
      $scope.newTask = { id: null, title: "", description: "", due_date: "" };
    };

    $scope.openEditModal = function(task) {
      $scope.modalTitle  = "Editar Tarefa";
      $scope.modalButton = "Atualizar";
      $scope.newTask = {
        id:          task.id,
        title:       task.title,
        description: task.description,
        due_date:    new Date(task.due_date)
      };
    };

    $scope.submitTask = function() {
      if ($scope.newTask.id) {
        tasksService.updateTask(
          $scope.newTask.id,
          $scope.newTask.title,
          $scope.newTask.description,
          $scope.newTask.due_date
        ).then(function() {
          $scope.loadUserTasks();
          let modalEl = document.getElementById('taskModal');
          bootstrap.Modal.getInstance(modalEl).hide();
        });
      } else {
        tasksService.createNewTask(
          $scope.newTask.title,
          $scope.newTask.description,
          $scope.newTask.due_date
        ).then(function() {
          $scope.loadUserTasks();
          let modalEl = document.getElementById('taskModal');
          bootstrap.Modal.getInstance(modalEl).hide();
        });
      }
    };

    $scope.switchTaskStatus = function(taskId) {
      tasksService.switchTaskStatus(taskId)
        .then(function() {
          $scope.loadUserTasks();
        });
    };

    $scope.deleteTask = function(taskId) {
      tasksService.deleteTask(taskId)
        .then(function() {
          $scope.loadUserTasks();
        });
    };

    // Carrega ao iniciar
    $scope.loadUserTasks();
  });
