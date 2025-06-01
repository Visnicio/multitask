angular.module('multitask-front')
  .service('loginService', function($http) {
    this.attemptLogin = function(user_email, user_password) {
      return $http({
        method: 'POST',
        url: 'http://localhost/api/auth/login',
        data: {
            email: user_email,
            password: user_password
        },
        headers: {
            'Content-Type': 'application/json'
        }
      });
    };
  });
