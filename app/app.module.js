(function() {
  'use strict';
  angular.module('app', ['ngRoute', 'uiAngular', 'djds4rce.angular-socialshare', 'angulike', 'angulartics', 'angulartics.google.analytics', '720kb.socialshare']);


  angular.module('app')
    .config(appConfig);

  function appConfig(socialshareConfProvider, $routeProvider) {
    $routeProvider.
    // when('/', {
    //   templateUrl: 'app/home.html',
    // }).
    // when('/consulting', {
    //   templateUrl: 'app/consulting.html',
    // }).
    when('/practical-startpage', {
      templateUrl: 'app/practical-startpage/practical-startpage.html',
      controller: 'PSCtrl',
      controllerAs: 'vm',
    }).
    when('/ui-angular', {
      templateUrl: 'app/ui-angular/ui-angular.html',
      controller: 'UICtrl',
      controllerAs: 'vm',
    }).
    when('/ps-uninstall', {
      templateUrl: 'app/practical-startpage/practical-startpage.html',
      controller: 'PSCtrl',
      controllerAs: 'vm',
    }).
    otherwise({
      redirectTo: '/practical-startpage',
    });
    socialshareConfProvider.configure([{
      'provider': 'facebook',
      'conf': {
        'url': 'https://chrome.google.com/webstore/detail/practical-startpage/ikjalccfdoghanieehppljppanjlmkcf',
        'text': 'Practical Startpage ',
      }
    },{
      'provider': 'xing',
      'conf': {
        'url': 'https://chrome.google.com/webstore/detail/practical-startpage/ikjalccfdoghanieehppljppanjlmkcf',
        'text': 'Practical Startpage ',
      }
    },{
      'provider': 'email',
      'conf': {
        'body': 'Hi, try Practical Startpage: https://chrome.google.com/webstore/detail/practical-startpage/ikjalccfdoghanieehppljppanjlmkcf',
        'subject': 'Try Practical Startpage for Google chrome',
      }
    // },{
    //   'provider': 'sms',
    //   'conf': {
    //     'url': 'https://chrome.google.com/webstore/detail/practical-startpage/ikjalccfdoghanieehppljppanjlmkcf',
    //     'text': 'Practical Startpage ',
    //   }
    },{
      'provider': 'facebook-messenger',
      'conf': {
        'url': 'https://chrome.google.com/webstore/detail/practical-startpage/ikjalccfdoghanieehppljppanjlmkcf',
        'text': 'Practical Startpage ',
      }
    },{
      'provider': 'whatsapp',
      'conf': {
        'url': 'https://chrome.google.com/webstore/detail/practical-startpage/ikjalccfdoghanieehppljppanjlmkcf',
        'text': 'Practical Startpage: ',
      }
    }]);

  }
})();
