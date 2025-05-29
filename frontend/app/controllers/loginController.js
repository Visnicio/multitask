angular.module('multitask-front')
    .controller('loginController', function($scope, loginService) {

        $scope.user_email = "";
        $scope.user_password = "";

        $scope.login = function() {
            console.log($scope.user_email, $scope.user_password);
            loginService.attemptLogin($scope.user_email, $scope.user_password).then(function(response) {
                console.log(response);               
            })
        }
    });