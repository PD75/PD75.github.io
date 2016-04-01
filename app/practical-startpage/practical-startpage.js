(function() {
  'use strict';

  angular
    .module('app')
    .controller('PSCtrl', PSCtrl);

  function PSCtrl($location, $routeParams, widgetService) {
    var vm = this;
    // vm.isActive = isActive;
    vm.like = {
      url: 'https://chrome.google.com/webstore/detail/practical-startpage/ikjalccfdoghanieehppljppanjlmkcf',
      name: 'Practical Startpage',
      image: 'https://chrome.google.com/webstore/detail/practical-startpage/ikjalccfdoghanieehppljppanjlmkcf',
    };
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
      if (angular.isDefined($routeParams.uninstall) && $routeParams.uninstall) {
        vm.modalUrl = 'app/practical-startpage/ps-uninstall-thanks.html';
        vm.showModal = true;
      }
    }

    // function isActive(hash) {
    //   return hash === $location.hash();
    // }

  }

})();
