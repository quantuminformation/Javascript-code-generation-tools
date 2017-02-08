import EmberDataGenerator from '../generators/emberData.js'
import TypeScriptGenerator from '../generators/typescript'
import ES6Generator from '../generators/ES6'
import BootstrapGenerator from '../generators/bootstrap'
import * as codeTypes from '../constants/CodeTypes'

import {UPDATE_CODE_GENERATION_OPTIONS, UPDATE_SOURCE} from '../constants/ActionTypes'


const initialState = {
  outputCodeFromJSON: '',
  sourceJSON: '',
  options: {outputCodeType: codeTypes.ES6}
}


/**
 * @param {string} json json coming from user to be generated
 */
function generateCode(inputCode, options) {
  let parsedJson = null
  try {
    parsedJson = JSON.parse(inputCode)
  } catch (e) {
    throw new Error(e.message)
  }
  const generators = {
    EMBER_DATA: EmberDataGenerator,
    ES6: ES6Generator,
    TYPESCRIPT: TypeScriptGenerator,
    [codeTypes.BOOTSTRAP_3_FORM]: BootstrapGenerator,
  }
  let currentGenerator = generators[options["outputCodeType"]]
  return `<pre>${currentGenerator.generate(parsedJson)}</pre>`
}

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_CODE_GENERATION_OPTIONS:
      if (!state.sourceJSON) {
        return state
      }
      return {
        ...state,
        options: action.options,
        outputCodeFromJSON: generateCode(state.sourceJSON, action.options)
      }
    case UPDATE_SOURCE:
      return {
        ...state,
        sourceJSON: action.sourceJSON,
        outputCodeFromJSON: generateCode(action.sourceJSON, state.options)
      }
    default: {
      return state
    }
  }
}
