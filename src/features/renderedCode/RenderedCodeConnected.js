import React from 'react';
import { connect } from 'react-redux';
import { RenderedCode } from './RenderedCode';

const mapStateToProps = ({ jsonCodeTools }) => {
  return {
    outputCodeFromJSON: jsonCodeTools.outputCodeFromJSON
  };
};

export const RenderedCodeConnected = connect(mapStateToProps)(RenderedCode);
