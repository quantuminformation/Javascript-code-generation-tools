import React from 'react'
import {connect} from 'react-redux'
import * as codeTypes from '../../constants/CodeTypes'
import {updateCodeGenerationOptions} from '../../actions'
import {RadioGroup, Radio} from 'react-radio-group'
import '../codeControls/CodeControls.css'
import {copyTextToClipboard} from '../../util/clipboard'

export let CodeControls = (props) => {


  let types = [
    codeTypes.ES6,
    codeTypes.TYPESCRIPT,
    codeTypes.BOOTSTRAP_3_FORM,
    codeTypes.EMBER_DATA
  ]

  return (
    <section className="codeControls">
      <h2>Generators</h2>
      <p>Click one of the following buttons to transform your json to the desired code.</p>


      <RadioGroup name="fruit" selectedValue={props.options.outputCodeType} onChange={props.handleChange}>
        {types.map((item, index) => <label key={index}><Radio value={item}/>{item}</label>)}
      </RadioGroup>

      <button id="copy-json" onClick={handleClick}>Copy sample JSON to clipboard</button>
    </section>
  )
  function handleClick() {
    copyTextToClipboard(
      `
      {
        "shouldBeNumber1": "1",
        "shouldBeString1": ".1",
        "shouldBeBoolean1": "false",
        "shouldBeFragment1": {
          "FshouldBeNumber1": "1",
          "FshouldBeString1": "bar",
          "FshouldBeBoolean1": "false"
        } 
      }
      `
    )
  }
}

const mapStateToProps = (state) => {
  return {
    options: state.jsonCodeTools.options
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (newValue) => {
      dispatch(updateCodeGenerationOptions({outputCodeType: newValue}))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeControls)
