import EmberDataGenerator from '../generators/emberData.js';
import TypeScriptGenerator from '../generators/typescript';
import ES6Generator from '../generators/ES6';
import BootstrapGenerator from '../generators/bootstrap';

import {GENERATE_SOURCE} from '../constants/ActionTypes'


const initialState = [
  {
    outputCodeFromJSON: ''
  }
]

/**
 * @param {string} json json coming from user to be generated
 */
function generateCode(outputCodeType, value) {
  let parsedJson = null;
  if (!value) {
    throw new Error('We can\'t parse an empty string');
  }
  try {
    parsedJson = JSON.parse(value);
  } catch (e) {
    throw new Error(e.message);
  }
  const generators = {
    EMBER_DATA: EmberDataGenerator,
    ES6: ES6Generator,
    TYPESCRIPT: TypeScriptGenerator,
    BOOTSTRAP3: BootstrapGenerator,
  };
  return `<pre> + ${generators[outputCodeType].generate(parsedJson)} + </pre>`
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GENERATE_SOURCE:
      return {
        ...state,
        outputCodeFromJSON: generateCode(action.outputCodeType,action.sourceJson)
      }
    default: {
      return state;
    }
  }
};
