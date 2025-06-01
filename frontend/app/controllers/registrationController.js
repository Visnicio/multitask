angular.module('multitask-front')
    .controller('registrationController', function($scope, $location, $rootScope, authService) {

        $scope.user_name = "";
        $scope.user_email = "";
        $scope.user_password = "";
        $scope.user_password_confirmation = "";

        $scope.register = function() {
            if ($scope.user_password !== $scope.user_password_confirmation) {
                alert("As senhas nao coincidem.");
                return;
            }

            authService.attemptRegister($scope.user_name, $scope.user_email, $scope.user_password)
            .then(function(response) {

                if (response.data.error) {
                    alert(response.data.error);
                    return;
                }

                $location.path('/login');
            });
        };
    });
