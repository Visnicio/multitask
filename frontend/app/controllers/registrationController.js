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

                authService.attemptLogin($scope.user_email, $scope.user_password).then(function(response) {
                if (response.data.error) {
                    alert(response.data.error);
                    return;
                }

                let token = response.data.access_token;
                localStorage.setItem('token', token);
                
                // save current user
                authService.requestUserData().then(function(response) {
                    if (response.data.status == "error") {
                        alert(response.data.error);
                        return;
                    }
                    authService.setUser(response.data);

                    $rootScope.$broadcast('userChanged');
                    $location.path('/dashboard');
                })
            })
            });
        };
    });
