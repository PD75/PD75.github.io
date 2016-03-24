(function() {
  'use strict';
  angular.module('app', ['ngRoute', 'uiAngular']);

  angular.module('app')
    .config(appConfig);

  function appConfig($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'app/home.html',
      }).
      when('/consulting', {
        templateUrl: 'app/consulting.html',
      }).
      when('/practical-startpage', {
        templateUrl: 'app/practical-startpage/practical-startpage.html',
        controller: 'PSCtrl',
        controllerAs: 'vm',
      }).
      otherwise({
        redirectTo: '/',
      });
  }
})();
