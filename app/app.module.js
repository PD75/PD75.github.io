
angular.module('app', ['ngRoute']);

angular.module('app')
  .config(function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'app/home.html',
      }).
      when('/consulting', {
        templateUrl: 'app/consulting.html',
      }).
      when('/practical-startpage', {
        templateUrl: 'app/practical-startpage.html',
      }).
      otherwise({
        redirectTo: '/',
      });
  });
