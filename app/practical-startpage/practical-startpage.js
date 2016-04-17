/* global detect chrome */

(function() {
  'use strict';

  angular
    .module('app')
    .controller('PSCtrl', PSCtrl);

  function PSCtrl($location, $routeParams, psDataService, IndexService) {
    var vm = this;
    vm.install = install;
    vm.checkBrowser = checkBrowser;
    vm.getPromotional = getPromotional;
    vm.browser = detect.parse(navigator.userAgent);
    vm.messages = {};
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
      if (angular.isDefined(psDataService.widgets) && psDataService.widgets.length > 0) {
        vm.widgets = psDataService.widgets;
      } else {
        psDataService.getWidgets()
          .then(function(data) {
            vm.widgets = data;
            i18n();
          });
      }
      if (angular.isDefined($routeParams.uninstall) && $routeParams.uninstall) {
        vm.modalUrl = 'app/practical-startpage/ps-uninstall-thanks.html';
        vm.showModal = true;
      }
      initFB();
    }

    function i18n() {
      angular.forEach(psDataService.messages, function(item, key) {
        vm.messages[key] = item.message;
      });
    }

    function getPromotional() {
      var locale = navigator.language.substring(0, 2);
      var locales = ['en', 'es', 'sv'];
      if (locales.indexOf(locale) === -1) {
        locale = 'en';
      }
      return 'app/practical-startpage/_locales/' + locale + '/promotional.html';
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
      }(document, 'script', 'facebook-jssdk'));

    }

    function install() {
      chrome.webstore.install('https://chrome.google.com/webstore/detail/ikjalccfdoghanieehppljppanjlmkcf');
    }

    function checkBrowser(browser) {
      return browser === detect.parse(navigator.userAgent).browser.family;
    }

    vm.menuUrl = 'app/shared/submenu.html';
    vm.subMenu = [{
      anchor: 'about',
      title: 'About',
    }, {
      anchor: 'help',
      title: 'Help',
      children: [{
        anchor: 'widgets',
        title: 'Widgets',
      }, {
        anchor: 'permissions',
        title: 'Permissions',
      }],
    }, {
      anchor: 'translation',
      title: 'Translation',
      children: [{
        anchor: 'languages',
        title: 'Languages',
      }, {
        anchor: 'translate',
        title: 'Translate',
      }],
    }, {
      anchor: 'credits',
      title: 'Credits',
    }];

    IndexService.setSubMenu(vm.subMenu);

  }

})();
