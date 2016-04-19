module.exports = function(config){
    config.set({

        basePath : './',

        files : [
            'node_modules/jquery/dist/jquery.js',
            'index.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'tests/**/*.js'
        ],

        preprocessors: {
            'index.js': [ 'browserify' ]
        },

        autoWatch : true,

        frameworks: ['jasmine', 'browserify'],

        browsers : ['PhantomJS', 'Chrome', 'Firefox'],

        plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-browserify'
        ],

        browserify: {
            debug: true,
            transform: []
        }

    });
};
