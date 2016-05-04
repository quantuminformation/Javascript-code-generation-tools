const types = require('../actions/actionTypes.js');

module.exports = function (state = 0, action) {
  switch (action.type) {
    case types.GENERATE_SOURCE:
      return state.renderedCode = 'foo';
    default:
    {
      return state;
    }
  }

};
