module.exports = function (config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine'],
      files: [
        'test/**/*.spec.js'
      ],
      preprocessors: {
        'test/**/*.spec.js': ['webpack', 'sourcemap']
      },
      webpack: {
        // Your webpack configuration
      },
      reporters: ['progress', 'kjhtml'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['Chrome'],
      singleRun: false,
      concurrency: Infinity
    });
  };
  