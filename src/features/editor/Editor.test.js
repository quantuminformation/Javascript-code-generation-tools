import React from 'react'
import {connect} from 'react-redux'
import {updateSourceCode} from '../../actions'
import SmartTerminal from 'smart-terminal'


let Editor = (props) => {

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
    props.dispatch(updateSourceCode(evt.target.value))
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
Editor = connect()(Editor)
export default Editor
