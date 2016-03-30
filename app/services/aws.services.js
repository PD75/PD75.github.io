(function() {
  'use strict';

  angular.module('uiAngular')
    .factory('awsService', awsService);

  function awsService($http, $location) {
    return {
      testAWS: testAWS,
      testPost: testPost,
      awsPost:awsPost,
    };

    function awsPost(data, path) {
      var baseUrl = 'https://26kma6a53l.execute-api.eu-central-1.amazonaws.com/';
      var url = baseUrl + path;
      $http.post(url, data);
    }

    function testAWS() {
      var data = {
        "device": '29.1' + $location.host(),
        "lat": "-10.01",
        "lon": "20.02",
      };
      var path = 'testing/submitdata';
      awsPost(data, path);
    }

    function testPost(data) {
      var t1 = consolidatedData(data);
      var t2 = getTableName($location.host());
      var x = t1;
    }
  }



  function consolidatedData(data) {
    var lambdaTime = new Date().getTime().toString();
    var item = {
      lambdaTime: {
        N: lambdaTime,
      }
    };
    if (data.userAgent && data.webTime && data.language && data.usageTime) {
      for (var key in data) {
        item[key] = addDataType(data[key]);
      }
    }
    return item;
  }

  function addDataType(data) {
    var result = {};
    switch (typeof data) {
      case 'object':
        result = {
          SS: data,
        };
        break;
      case 'number':
        result = {
          N: data.toString(),
        };
        break;
      default:
        result = {
          S: data,
        };
        break;
    }

    return result;
  }
  
  function getTableName(domain) {
    var tableName = 'ps-uninstall';
    switch (domain) {
      case 'localhost':
        tableName += '-dev';
        break;
      case 'pdca.duckdns.org':
        tableName += '-test';
        break;
      case 'pd75.github.io':
        break;
      default:
        tableName = null;
        break;
    }
    return tableName;
  }

})();


