(function () {
    'use strict';
    var directiveId = 'indicator';
    angular.module('app').directive(directiveId, [function () {

        var directive = {
            link: link,
            restrict: 'A',
            replace: false,
            scope: {
                show: '=' + directiveId
            }
        };
        return directive;

        function link(scope, element, attr) {
            var options = { segments: 12, width: 5.5, space: 6, length: 13, color: '#252525', speed: 1.5 };
  
            scope.$watch('show', function (newValue) {
                showActivity(newValue);
            });

            function showActivity(value) {
                if (value) {
                    $(element).activity(options);
                } else {
                    $(element).activity(false);
                }
            }
        }
    }]);
})();
