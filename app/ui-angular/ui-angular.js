(function() {
  'use strict';

  angular
    .module('app')
    .controller('UICtrl', UICtrl);

  function UICtrl(IndexService) {
    var vm = this;
    vm.menuUrl = 'app/shared/submenu.html';
    vm.url = '/#/ui-angular';
    vm.stickyData = {
      offset: 60,
    };


    vm.subMenu = [{
      anchor: 'about',
      title: 'About',
      children: [{
        anchor: 'approach',
        title: 'Approach',
      }, {
        anchor: 'dependencies',
        title: 'Dependencies',
      }, {
        anchor: 'status',
        title: 'Status',
      }, ],
    }, {
      anchor: 'install',
      title: 'Install',
      children: [{
        anchor: 'download',
        title: 'Download',
      }, {
        anchor: 'build',
        title: 'Build',
      }, ],
    }, {
      anchor: 'behaviours',
      title: 'Behaviours',
      children: [{
        anchor: 'common-features',
        title: 'Common features',
      }, {
        anchor: 'visibility',
        title: 'Visibility',
      }, ],
    }, {
      anchor: 'modules',
      title: 'Modules',
      children: [{
        anchor: 'common-features',
        title: 'Common features',
      }, {
        anchor: 'dropdown',
        title: 'Dropdown',
      }, {
        anchor: 'modal',
        title: 'Modal',
      }, {
        anchor: 'popup',
        title: 'Popup',
      }, {
        anchor: 'sticky',
        title: 'Sticky',
      }, ],
    }, ];
    IndexService.setSubMenu(vm.subMenu);
  }

})();
