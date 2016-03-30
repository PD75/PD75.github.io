
(function() {
  'use strict';

  angular
    .module('app')
    .controller('psUninstallCtrl', psUninstallCtrl);

  function psUninstallCtrl($routeParams, awsService) {
    var vm = this;

    vm.buttonDisabled = true;
    vm.suggestions = false;
    vm.data = {};
    vm.questions = [
      {
        title: 'Reinstalling to fix an issue',
        comment: 'You can clear Practical Startpage´s data both from the options menu inside and in chrome´s extension page',
      }, {
        title: 'Too slow',
        comment: 'Loading time is determined by amount of data you show on the screen. E.g. keeping bookmark tree expanded increases loading time',
      }, {
        title: 'Did not work',
        comment: 'I fix reported bugs as a priority. Clearing all data from option can resolve a issues.',
      }, {
        title: 'Did not like the way it looks',
        comment: 'Any advice on how to improve the look and feel is much appreciated',
      }, {
        title: 'Requires too much permissions',
        comment: 'All chrome permissions are full, there is not way to only limit to read. All permissions that are core, need to be approved by the user to increase security.',
      }, {
        title: 'Feels unsafe',
        comment: 'There is not tracking (that´s why I had to write this survey to find out you experience). The extension is open source, and avaiable on github including chrome store packages.',
      }, {
        title: 'Found too many bugs',
        comment: 'Please let me know what bugs there are in the box below, or submit in the menu on the left.',
      }, {
        title: 'Found something better',
        comment: 'Please write what you are using, maybe there is something I could add.',
      }, {
        title: 'Other',
        comment: 'Please explain in the comment box to help improve for other users.',
      },
    ];

    vm.checkboxCB = checkboxCB;
    vm.submitSurvey = submitSurvey;

    function checkboxCB() {
      vm.buttonDisabled = true;
      vm.suggestions = false;
      for (var q = 0; q < vm.questions.length; q++) {
        if (vm.questions[q].selected && vm.questions[q].title !== 'Other') {
          vm.buttonDisabled = false;
          vm.suggestions = true;
        }
        if (vm.questions[q].selected && vm.questions[q].title === 'Other') {
          vm.suggestions = true;
        }
        if (angular.isDefined(vm.textBox) && vm.textBox.length > 3) {
          vm.buttonDisabled = false;
        }
      }
    }

    function submitSurvey() {
      var j = 0;
      var answers = [];
      for (var i = 0; i < vm.questions.length; i++) {
        if (vm.questions[i].selected) {
          answers[j++] = vm.questions[i].title;
        }
      }
      if (answers.length > 0) {
        vm.data.answers = answers;
      }
      if (angular.isDefined(vm.textBox) && vm.textBox.length > 0) {
        vm.data.comments = vm.textBox;
      }
      if (angular.isDefined(vm.email) && vm.email.length > 0) {
        vm.data.email = vm.email;
      }
      awsService.testPost(vm.data);
    }

    getData();
    function getData() {
      var params = $routeParams;
      if (angular.isDefined(params.usageTime) && angular.isNumber(+params.usageTime )) {
        vm.data.usageTime = +params.usageTime;
      } else {
         vm.data.usageTime = 0;
      }
      vm.data.userAgent = navigator.userAgent;
      vm.data.language = navigator.language;
      vm.data.webTime = new Date().getTime();
      awsService.testPost(vm.data);
    }
  }

})(); 
