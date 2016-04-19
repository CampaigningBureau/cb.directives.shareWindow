describe('Check ShareWindow-Directive', function() {


    var _element,
        _scope,
        windowOptions;

    beforeEach(module('cb.directives.shareWindow'));

    beforeEach(inject(["$rootScope", "CBShareWindowDefaults", function($rootScope, CBShareWindowDefaults) {
        _scope = $rootScope.$new();

        windowOptions = [
            'width=' + CBShareWindowDefaults.width,
            'height=' + CBShareWindowDefaults.height,
            'top=' + 0,
            'left=' + 0,
            'scrollbars=yes'
        ].join(',');
    }]));

    function compileElement(tpl) {
        inject(["$compile", function($compile) {
            _element = $compile(tpl)(_scope);

            _scope.$digest();
        }])
    }

    describe('static link', function() {
        var _link   = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent('http://michael.scharl.me'),
            _markup = '<a href="' + _link + '" share-window>Link</a>';

        // before each test in this block, generates a fresh directive
        beforeEach(function() {
            compileElement(_markup);
        });


        it('should open a popup', inject(["$window", function($window) {
            spyOn($window, 'open').and.callFake(function() {
                return {
                    focus: angular.noop
                };
            });

            _element.triggerHandler('click');

            expect($window.open).toHaveBeenCalled();
            expect($window.open).toHaveBeenCalledWith(_link, 'Window', windowOptions);
        }]));

        it('should focus the popup', inject(["$window", function($window) {
            var dummy = {
                focus: function() { return true; }
            };

            spyOn($window, 'open').and.callFake(function() {
                return {
                    focus: dummy.focus
                };
            });

            spyOn(dummy, 'focus');

            _element.triggerHandler('click');

            expect(dummy.focus).toHaveBeenCalled();
        }]));
    });


    describe('dynamic link', function() {
        var _link   = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent('http://michael.scharl.me'),
            _markup = "<a ng-href=\"{{'" + _link + "'}}\" share-window>Link</a>";

        // before each test in this block, generates a fresh directive
        beforeEach(function() {
            compileElement(_markup);
        });


        it('should open a popup', inject(["$window", function($window) {
            spyOn($window, 'open').and.callFake(function() {
                return {
                    focus: angular.noop
                };
            });

            _element.triggerHandler('click');

            expect($window.open).toHaveBeenCalled();
            expect($window.open).toHaveBeenCalledWith(_link, 'Window', windowOptions);
        }]));

        it('should focus the popup', inject(["$window", function($window) {
            var dummy = {
                focus: function() { return true; }
            };

            spyOn($window, 'open').and.callFake(function() {
                return {
                    focus: dummy.focus
                };
            });

            spyOn(dummy, 'focus');

            _element.triggerHandler('click');

            expect(dummy.focus).toHaveBeenCalled();
        }]));

    });

});
