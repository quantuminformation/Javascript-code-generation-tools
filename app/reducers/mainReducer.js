import types from '../actions/actionTypes.js'
import EmberDataGenerator from '../generators/emberData.js'
import TypeScriptGenerator from '../generators/typescript'
import ES6Generator from '../generators/ES6'
import BootstrapGenerator from '../generators/bootstrap'


/**
 * @param {string} json json coming from user to be generated
 */
function generateCode(json) {
  let parsedJson = null;
  if (json) {
    throw new Error('We can\'t parse an empty string');
  }
  try {
    parsedJson = JSON.parse(json);
  } catch (e) {
    throw new Error(e.message);
  }
  const generators = {
    EMBER_DATA: EmberDataGenerator,
    ES6: ES6Generator,
    TYPESCRIPT: TypeScriptGenerator,
    BOOTSTRAP3: BootstrapGenerator,
  };

  this.setState({
    outputCode: `<pre> + ${generators[event.target.dataset.type].generate(parsedJson)} + </pre>`,
  });
}

export default function (state = '', action) {
  switch (action.type) {
    case types.GENERATE_SOURCE:
      return generateCode(action.inputString);
    default:
    {
      return state;
    }
  }

};
