angular.module('multitask-front')
  .service('authService', function($http, $window, $location) {
    
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

    this.attemptRegister = function(user_name, user_email, user_password) {
      return $http({
        method: 'POST',
        url: 'http://localhost/api/auth/register',
        data: {
            name: user_name,
            email: user_email,
            password: user_password
        },
        headers: {
            'Content-Type': 'application/json'
        }
      });
    };

    this.requestUserData = function() {
        return $http({
        method: 'POST',
        url: 'http://localhost/api/auth/me',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
        }
      });
    }

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
        $http({
            method: 'POST',
            url: 'http://localhost/api/auth/logout',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        });
        $window.localStorage.removeItem('token');
        $window.localStorage.removeItem('loggedUser');

        $location.path('/login');
    };
  });
