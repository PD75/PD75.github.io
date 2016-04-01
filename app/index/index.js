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

    if ($location.host() === 'pd75.github.io') {
      ga('create', 'UA-75343768-1', 'auto');

    } else {
      ga('create', 'UA-75343768-2', 'auto');
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
