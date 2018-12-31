const testPathExp = 'src/**/*.test.js?(x)';

module.exports = function() {
  return {
    files: ['src/**/*.js?(x)', `!${testPathExp}`],
    tests: [testPathExp]
  };
};
