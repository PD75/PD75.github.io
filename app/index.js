(function() {
  'use strict';

  angular
    .module('app')
    .controller('IndexCtrl', IndexCtrl)
    .directive('pd75Index', IndexDirective);

  function IndexCtrl() {
    var vm = this;
    vm.menuVisibility = {
      type: 'fixed',
    };
  }

  function IndexDirective() {
    return {
      restrict: 'A',
      controller: 'IndexCtrl',
      controllerAs: 'vm',
    };
  }
})();


$(document)
  .ready(function() {
    $('.ui.sticky')
      .sticky({
        context: '#example1'
      })
      ;
  });
  