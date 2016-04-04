(function() {
  'use strict';

  angular
    .module('app')
    .controller('PSCtrl', PSCtrl);

  function PSCtrl($location, $routeParams, widgetService) {
    var vm = this;
    vm.install = install;
    // vm.isActive = isActive;
    vm.like = {
      url: 'https://chrome.google.com/webstore/detail/practical-startpage/ikjalccfdoghanieehppljppanjlmkcf',
      name: 'Practical Startpage',
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
      initFB();
      var x = chrome.app.isInstalled;
    }

    function initFB() {
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
        fjs.parentNode.insertBefore(js, fjs);
      } (document, 'script', 'facebook-jssdk'));

    }

    function install() {
      chrome.webstore.install('https://chrome.google.com/webstore/detail/ikjalccfdoghanieehppljppanjlmkcf',function(params) {
        var x = params;
      }, function(params) {
        var x = params;
      })
    }
  }

})();
