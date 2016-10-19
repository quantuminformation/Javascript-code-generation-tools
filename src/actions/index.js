import * as types from '../constants/ActionTypes'

export const generateSource = (outputCodeType,sourceJson) => ({type: types.GENERATE_SOURCE, outputCodeType, sourceJson})
