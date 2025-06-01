angular.module('multitask-front')
  .controller('indexController', function($scope, $rootScope, authService) {
  
    $scope.currentUser = authService.getCurrentUser();
    $rootScope.$on('userChanged', function() {
      $scope.currentUser = authService.getCurrentUser();
      alert("index")
    })

    $scope.logout = function() {
      authService.logout();
      $rootScope.$broadcast('userChanged');
    }

  });
