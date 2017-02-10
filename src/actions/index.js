import * as types from '../constants/ActionTypes'

export const updateSourceCode = (sourceCode) => ({type: types.UPDATE_SOURCE, sourceCode})
export const updateCodeGenerationOptions = (options) => ({type: types.UPDATE_CODE_GENERATION_OPTIONS, options})
