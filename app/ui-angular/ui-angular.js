(function() {
  'use strict';

  angular
    .module('app')
    .controller('UICtrl', UICtrl);

  function UICtrl() {
    var vm = this;
    vm.menuUrl = 'app/ui-angular/ui-angular-menu.html';
    vm.url = '/#/ui-angular';
    vm.stickyData = {
      offset: 60,
    };


    vm.menu = [
      {
        anchor: 'approach',
        title: 'Approach',
      }, {
        anchor: 'status',
        title: 'Status',
      }, {
        anchor: 'dependencies',
        title: 'Dependencies',
      }, {
        anchor: 'behaviours',
        title: 'Behaviours',
        children: [
          {
            anchor: 'common-features',
            title: 'Common features',
          }, {
            anchor: 'visibility',
            title: 'Visibility',
          },
        ],
      }, {
        anchor: 'modules',
        title: 'Modules',
        children: [
          {
            anchor: 'common-features',
            title: 'Common features',
          }, {
            anchor: 'dropdown',
            title: 'Dropdown',
          },
          {
            anchor: 'modal',
            title: 'Modal',
          }, {
            anchor: 'popup',
            title: 'Popup',
          }, {
            anchor: 'sticky',
            title: 'Sticky',
          },
        ],
      },
    ];
  }

})();
