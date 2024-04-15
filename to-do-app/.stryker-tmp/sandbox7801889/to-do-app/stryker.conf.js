// @ts-nocheck
module.exports = function (config) {
    config.set({
      mutate: ['src/**/*.js', '!src/**/*.test.js'],
      testRunner: 'jest',
      reporters: ['progress', 'clear-text', 'html'],
      coverageAnalysis: 'off',
      jest: {
        projectType: 'custom',
        configFile: 'jest.config.js',
      },
    });
  };
  