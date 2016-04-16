(function(angular) {
  'use strict';
  angular.module('app')
    .service('psDataService', psDataService);

  function psDataService($http, $q, $sce, widgetsConstant) {
    var s = this;
    s.getWidgets = getWidgets;

    s.widgets = [];
    s.messages = [];

    function getWidgets() {
      return getMessages()
        .then(function(data) {
          var w = 0;
          angular.forEach(widgetsConstant, function(widget, key) {
            s.widgets[w++] = {
              icon: widget.icon,
              title: data['w_' + key].message,
              html: $sce.trustAsHtml(data['w_' + key + '_help'].message),
              permissions: widget.permissions,
            };
          });
          return s.widgets;
        });
    }

    function getMessages() {
      if (s.messages.length > 0) {
        return s.messages;
      } else {
        var locale = navigator.language.substring(0, 2);
        var locales = ['es', 'sv'];
        if (locales.indexOf(locale) >= 0) {
          var promises = [];
          promises[0] = $http.get('app/practical-startpage/_locales/en/messages.json');
          promises[1] = $http.get('app/practical-startpage/_locales/' + locale + '/messages.json');
          return $q.all(promises)
            .then(function(data) {
              s.messages = data[0].data;
              angular.merge(s.messages, data[1].data);
              return s.messages;
            });
        } else {
          return $http.get('app/practical-startpage/_locales/en/messages.json')
            .then(function(data) {
              s.messages=data.data;
              return s.messages;
            });
        }
      }
    }
  }
})(angular);
