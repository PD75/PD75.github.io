(function() {
  'use strict';
  angular.module('app', ['ngRoute', 'uiAngular', 'angulartics', 'angulartics.google.analytics']);

  angular.module('app')
    .config(appConfig);

  function appConfig($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'app/home.html',
      }).
      // when('/consulting', {
      //   templateUrl: 'app/consulting.html',
      // }).
      when('/practical-startpage', {
        templateUrl: 'app/practical-startpage/practical-startpage.html',
        controller: 'PSCtrl',
        controllerAs: 'vm',
      }).
      // when('/ui-angular', {
      //   templateUrl: 'app/ui-angular/ui-angular.html',
      //   controller: 'UICtrl',
      //   controllerAs: 'vm',
      // }).
      when('/ps-uninstall', {
        templateUrl: 'app/practical-startpage/ps-uninstall.html',
        controller: 'psUninstallCtrl',
        controllerAs: 'vm',
      }).
      otherwise({
        redirectTo: '/practical-startpage',
      });
  }
})();
