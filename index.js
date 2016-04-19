const angular      = require('angular'),

      ngModuleName = 'cb.directives.shareWindow',
      ngModule     = angular.module(ngModuleName, []);

ngModule.constant('CBShareWindowDefaults', {
    width : 500,
    height: 375
});

/**
 * @ngdoc directive
 * @name cb.directives.shareWindow:shareWindow
 * @restrict A
 *
 * @author Michael Scharl <ms@campaigning-bureau.com>
 *
 * @description
 * Automatically open a link in a popup window
 *
 * @example
 <doc:example module="ct.directives.shareWindow">
 <doc:source>
 <div>
 <a href="https://twitter.com/intent/tweet?url=http://example.com" share-window class="btn btn-info btn-small">Share on Twitter</a>
 <a href="https://facebook.com/share.php?u=http://example.com" share-window class="btn btn-info btn-small">Share on Facebook</a>
 </div>
 </doc:source>
 </doc:example>
 */
ngModule.directive('shareWindow', ["CBShareWindowDefaults", "$window", function(CBShareWindowDefaults, $window) {
    var shareWindowDirective = {};

    /** @property {string} limit directive to class definition */
    shareWindowDirective.restrict = 'A';

    shareWindowDirective.link = function($scope, $element, $attrs) {

        function shareWindowDirectiveClickHandler($event) {
            $event.preventDefault();

            var windowOptions = [];

            windowOptions.push('width=' + CBShareWindowDefaults.width.toString());
            windowOptions.push('height=' + CBShareWindowDefaults.height.toString());

            windowOptions.push('top=' + 0);
            windowOptions.push('left=' + 0);

            windowOptions.push('scrollbars=yes');

            var shareWindow = $window.open($attrs.href, 'Window', windowOptions.join(','));
            shareWindow.focus();
        }

        $element.on('click', function($event) {
            shareWindowDirectiveClickHandler($event, $scope);
        });
    };

    return shareWindowDirective;
}]);


module.export = ngModuleName;
