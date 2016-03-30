(function() {
  'use strict';

  angular.module('uiAngular')
    .factory('awsService', awsService);

  function awsService($http, $location) {
    return {
      awsPost: awsPost,
    };

    function awsPost(data, method) {
      return $http.get('app/services/aws.services.var.json')
        .then(function(result) {
          var event = {};
          event.host = $location.host();
          event.data = data;
          var url = result.data.APIGateway;
          url += '/' + result.data.env[event.host];
          url += '/' + method;
          // console.log(JSON.stringify(event));
          return $http.post(url, event)
            .then(function(result) {
              return result;
            });
        });
    }
  }

})();


