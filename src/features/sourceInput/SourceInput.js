import React from 'react'
import {connect} from 'react-redux'
import {updateSource} from '../../actions'
import SmartTerminal from 'smart-terminal'


let SourceInput = ({dispatch}) => {

  const checkSyntax = (evt)=> {
    try {
      JSON.parse(evt.target.value)
    } catch (e) {
      //throw new Error(e.message)
      let event = new CustomEvent(SmartTerminal.EVENTS.APPEND_MESSAGE,
        {detail:`Your input JSON is not valid: ${e.message}`})

      document.body.dispatchEvent(event)
      return
    }
    dispatch(updateSource(evt.target.value))
  }
  var style = {
   marginRight:'1em'
  };

  return (
    <section className="flex1" style={style}  >
      <h2>Input JSON</h2>
      <textarea id="codeInput" type="textarea" onChange={checkSyntax}
                placeholder='Paste JSON code here..'>
          </textarea>
    </section>
  )
}
SourceInput = connect()(SourceInput)
export default SourceInput
