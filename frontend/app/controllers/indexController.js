angular.module('multitask-front')
  .controller('indexController', function($scope, indexService) {
    
    // // como getMessage() retorna uma Promise, precisamos usar .then()
    // indexService.getMessage().then(function(response) {
    //   $scope.mensagem = response.data;
    // }).catch(function(error) {
    //   console.error("Erro ao obter mensagem:", error);
    // });

    
  });
