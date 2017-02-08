import * as types from '../constants/ActionTypes'

export const updateSource = (sourceJSON) => ({type: types.UPDATE_SOURCE, sourceJSON})
export const updateCodeGenerationOptions = (options) => ({type: types.UPDATE_CODE_GENERATION_OPTIONS, options})
