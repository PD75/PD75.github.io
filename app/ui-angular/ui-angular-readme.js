(function() {
  'use strict';

  angular
    .module('app')
    .directive('uiReadme', uiReadmeDirective)
    .controller('UIReadmeCtrl', UIReadmeCtrl);

  function UIReadmeCtrl($timeout) {
    var vm = this;

    $timeout(function() {
      prettyPrint();
    });
  }
  function uiReadmeDirective() {
    return {
      templateUrl: 'app/ui-angular/ui-angular-readme.html',
      controller: 'UIReadmeCtrl',
      // controllerAs: 'vm',
    };
  }
})();
