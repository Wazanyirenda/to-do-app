module.exports = {
  mutate: ['src/**/*.js'],
  testRunner: 'jest',
  reporters: ['html', 'clear-text', 'progress'],
  coverageAnalysis: 'off',
  jest: {
    projectType: 'react',
  },
};
