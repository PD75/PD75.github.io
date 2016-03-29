(function() {
  'use strict';

  angular
    .module('app')
    .controller('UICtrl', UICtrl);

  function UICtrl() {
    var vm = this;
    // vm.isActive = isActive;

    vm.url = '#ui-angular';
    vm.stickyData = {
      offset: 60,
    };   
  }

})();
