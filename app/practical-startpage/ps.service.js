(function(angular) {
  'use strict';
  angular.module('app')
    .service('widgetService', widgetService);

  function widgetService($http, $sce, widgetsConstant) {
    var s = this;
    s.get = get;

    s.widgets = [];
    s.messages = {};

    function get() {
      return messages()
        .then(function(data) {
          var w = 0;
          angular.forEach(widgetsConstant, function(widget, key) {
            s.widgets[w++] = {
              icon: widget.icon,
              title: data['w_' + key].message,
              html: $sce.trustAsHtml(data['w_' + key + '_help'].message),
            };
          });
          return s.widgets;
        });
    }

    function messages() {
      return $http.get('app/practical-startpage/ps.messages.json')
        .then(function(data) {
          return data.data;
        });
    }

  }
})(angular);
