(function() {
  'use strict';

  angular
    .module('app')
    .controller('IndexCtrl', IndexCtrl)
    .directive('pdIndex', IndexDirective);

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


// $(document)
//   .ready(function() {
//     setTimeout(function() {
//       $('.ui.sticky')
//         .sticky({
//           context: '.example1',
//           offset: 60,
//         });
//     }, 1500);
//   });
