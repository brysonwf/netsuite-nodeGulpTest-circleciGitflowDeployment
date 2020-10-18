// Karma configuration
// Generated on Sat Aug 15 2015 04:44:13 GMT+0000 (UTC)

process.env.PHANTOMJS_BIN = './node_modules/.bin/phantomjs'

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'requirejs', 'chai'],

    // list of files / patterns to load in the browser
    files: [
      './N.js',
      './test-main.js',
      './nlapihandler.js',
      {pattern: './*/src/*.js', included: false},
      {pattern: './*/test/*-test.js', included: false},
      {pattern: './N/*.js', included: false},
      {pattern: './N/**/*.js', included: false}
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './*/src/*.js': ['coverage'],
      './*/*.js': ['coverage']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage', 'junit'],

    junitReporter: {
      outputDir: process.env.JUNIT_REPORT_PATH+'junit/',
      outputFile: process.env.JUNIT_REPORT_NAME,
      useBrowserName: false
    },

    coverageReporter: {
      // specify a common output directory
      dir: process.env.JUNIT_REPORT_PATH+'coverage',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'text', subdir: '.', file: 'text.txt' }
      ]
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};