(function() {
  'use strict';

  angular
    .module('app')
    .controller('PSCtrl', PSCtrl);

  function PSCtrl(widgetService) {
    var vm = this;

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

  }

})();
