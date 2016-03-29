(function() {
  'use strict';

  angular
    .module('app')
    .controller('IndexCtrl', IndexCtrl)
    .directive('pdIndex', IndexDirective);

  function IndexCtrl($location, $http) {
    var vm = this;
    vm.isActive = isActive;

    vm.menuVisibility = {
      type: 'fixed',
    };

    function isActive(path) {
      return path === $location.path();
    }
    testAWS();
    function testAWS() {
      var data = {
        "device": $location.host(),
        "lat": "-10.01",
        "lon": "20.02"
      };
      var url = 'https://26kma6a53l.execute-api.eu-central-1.amazonaws.com/testing/submitdata';
      $http.post(url, data)
        .then(function(params) {
          var x = params;
        });
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
