/* global ga */

(function() {
  'use strict';

  angular
    .module('app')
    .controller('IndexCtrl', IndexCtrl)
    .directive('pdIndex', IndexDirective)
    .service('IndexService', IndexService);

  function IndexCtrl($location, IndexService) {
    var vm = this;
    vm.isActive = isActive;
    vm.subMenu = [];
    IndexService.setCB(setSubMenu);

    vm.menuVisibility = {
      type: 'fixed',
    };

    function isActive(path) {
      return path === $location.path();
    }


    function setSubMenu(subMenu) {
      vm.subMenu = subMenu;
      vm.url = '#' + $location.path();

    }
    initGA();
    if ($location.host() === 'pd75.github.io') {
      ga('create', 'UA-75343768-1', 'auto');

    } else {
      ga('create', 'UA-75343768-2', 'auto');
    }

    vm.menu = [{
      url: 'practical-startpage',
      menu: 'Practical Startpage',
    }, {
      url: 'ui-angular',
      menu: 'UI Angular',
    }];
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

  function initGA() {
    (function(i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r;
      i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
      }, i[r].l = 1 * new Date();
      a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
  }

  function IndexService() {
    var s = this;
    s.setCB = setCB;
    s.setSubMenu = setSubMenu;

    function setCB(CB) {
      s.subMenuCB = CB;
    }

    function setSubMenu(subMenu) {
      s.subMenuCB(subMenu);
    }

  }

})();
