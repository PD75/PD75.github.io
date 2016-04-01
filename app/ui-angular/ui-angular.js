(function() {
  'use strict';

  angular
    .module('app')
    .controller('UICtrl', UICtrl);

  function UICtrl($timeout) {
    var vm = this;

    // hljs.initHighlighting();
    // vm.isActive = isActive;
    $timeout(function() {
      prettyPrint();
    })
    vm.url = '#ui-angular';
    vm.stickyData = {
      offset: 60,
    };
  }

})();
