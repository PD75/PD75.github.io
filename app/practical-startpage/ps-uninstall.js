(function() {
  'use strict';

  angular
    .module('app')
    .controller('psUninstallCtrl', psUninstallCtrl);

  function psUninstallCtrl() {
    var vm = this;

    vm.buttonDisabled = true;
    vm.suggestions = false;
    vm.questions = [
      {
        title: 'Reinstalling to fix an issue',
        comment: 'You can clear Practical Startpage´s data both from the options menu inside and in chrome´s extension page',
      }, {
        title: 'Too slow',
        comment: 'Loading time is determined by amount of data you show on the screen. E.g. keeping bookmark tree expanded increases loading time',
      }, {
        title: 'Did not work',
        comment: 'I fix reported bugs as a priority.Clearing all data from option can resolve a issues.',
      }, {
        title: 'Did not like the way it looks',
        comment: 'Any advice on how to improve the look and feel is much appreciated',
      }, {
        title: 'Requires too much permissions',
        comment: 'To read chrome data there is two way permissions, there is not way around that. All permissions above the basics needed to start, need to be approved on a case by case by the user to increase security.',
      }, {
        title: 'Feels unsafe',
        comment: 'There is not tracking (that´s why I had to write this survey to find out you experience). The extension is open source, and avaiable on github including release packages I upload, so you don´t have to take my word for it. (link in "about")',
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
        if (vm.textBox.length > 3) {
          vm.buttonDisabled = false;
        }
      }
    }

    function submitSurvey() {
      var x = 1;
    }
    
    getData();
    function getData() {
      var y = detect.parse(navigator.userAgent);
    }
  }

})(); 
