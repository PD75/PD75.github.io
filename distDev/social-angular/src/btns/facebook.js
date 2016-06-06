(function() {
  'use strict';
  angular.module('social-angular')
    .directive('saFacebook', facebookDirective);

  function facebookDirective($window, $rootScope) {
    return {
      restrict: 'A',
      scope: {
        fbLike: '=?',
      },
      link: function(scope, element, attrs) {
        if (!$window.FB) {
          // Load Facebook SDK if not already loaded
          $.getScript('//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6', function() {

            renderLikeButton();
          });
        } else {
          renderLikeButton();
        }


        function renderLikeButton() {
          var watchAdded = false;
          $window.FB.init({
            appId: $rootScope.facebookAppId,
            xfbml: true,
            version: 'v2.6',
          });
          if (!!attrs.fbLike && !scope.fbLike && !watchAdded) {
            // wait for data if it hasn't loaded yet
            watchAdded = true;
            var unbindWatch = scope.$watch('fbLike', function(newValue) {
              if (newValue) {
                renderLikeButton();
                // only need to run once
                unbindWatch();
              }

            });
            return;
          } else {
            element.html('<div class="fb-like"' + (!!scope.fbLike ? ' data-href="' + scope.fbLike + '"' : '') + ' data-layout="button" data-action="like" data-show-faces="true" data-share="true"></div>');
          }
        }
      }
    };
  }
})();
