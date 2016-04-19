module.exports = function(config){
    config.set({

        basePath : './',

        files : [
            'node_modules/jquery/dist/jquery.js',
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'dist/cb.directives.sharewindow.js',
            'tests/**/*.js'
        ],

        autoWatch : true,

        frameworks: ['jasmine'],

        plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine'
        ]
    });
};
