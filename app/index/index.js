(function() {
  'use strict';

  angular
    .module('app')
    .controller('IndexCtrl', IndexCtrl)
    .directive('pdIndex', IndexDirective);

  function IndexCtrl($location) {
    var vm = this;
    vm.isActive = isActive;

    vm.menuVisibility = {
      type: 'fixed',
    };

    function isActive(path) {
      return path === $location.path();
    }



  }

  function IndexDirective($rootScope, $location, $anchorScroll) {
    return {
      restrict: 'A',
      controller: 'IndexCtrl',
      controllerAs: 'vm',
      link: link,
    };
    function link(s) {
      s.$on('$routeChangeSuccess', function() {
        if ($location.hash()) {
          $anchorScroll();
        }
      });
    }
  }
})();
