(function() {
  'use strict';

  angular
    .module('app')
    .controller('PSCtrl', PSCtrl);

  function PSCtrl($location, widgetService) {
    var vm = this;
    // vm.isActive = isActive;

    vm.url = '#practical-startpage';
    vm.stickyData = {
      offset: 60,
    };

    activate();

    function activate() {
      widgetService.get()
        .then(function(data) {
          vm.widgets = data;
        });
    }

    // function isActive(hash) {
    //   return hash === $location.hash();
    // }

  }

})();
