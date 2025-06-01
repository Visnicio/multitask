angular.module('multitask-front')
  .service('authService', function($http, $window) {
    
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

    this.setUser = function(user) {
      $window.localStorage.setItem('loggedUser', JSON.stringify(user));
    };

    this.getCurrentUser = function() {
      const user = $window.localStorage.getItem('loggedUser');
      return user ? JSON.parse(user) : null;
    };

    this.isLoggedIn = function() {
      return !!this.getCurrentUser();
    };

    this.logout = function() {
      $window.localStorage.removeItem('loggedUser');
    };
  });
