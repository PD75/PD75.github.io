
angular.module('app', ['ngRoute']);

angular.module('app')
  .config(function($routeProvider) {
   $routeProvider.
      when('/', {
        templateUrl: 'app/home.html',
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  });
