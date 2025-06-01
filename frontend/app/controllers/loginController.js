angular.module('multitask-front')
    .controller('loginController', function($scope, loginService) {

        $scope.user_email = "";
        $scope.user_password = "";

        $scope.login = function() {
            loginService.attemptLogin($scope.user_email, $scope.user_password).then(function(response) {

                if (response.data.error) {
                    alert(response.data.error);
                    return;
                }

                let token = response.data.access_token;
                localStorage.setItem('token', token);
                
                $scope.user_email = "";
                $scope.user_password = "";
                $location.path('/dashboard');
                
            })
        }
    });