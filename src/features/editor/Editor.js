import React from 'react'
import {connect} from 'react-redux'
import {updateSourceCode} from '../../actions'
import SmartTerminal from 'smart-terminal'


let Editor = (props) => {

  var style = {
    marginRight: '1em'
  };

  return (
    <section className="flex1" style={style}>
      <h2>Input JSON</h2>
      <textarea id="codeInput" type="textarea" onChange={props.onTextChange}
                placeholder='Paste JSON code here..'>
          </textarea>
    </section>
  )
}


const mapDispatchToProps = (dispatch) => {
  return {
    onTextChange: (evt) => {
      try {
        JSON.parse(evt.target.value)
      } catch (e) {
        //throw new Error(e.message)
        let event = new CustomEvent(SmartTerminal.EVENTS.APPEND_MESSAGE,
          {detail: `Your input JSON is not valid: ${e.message}`})

        document.body.dispatchEvent(event)
        return
      }
      dispatch(updateSourceCode(evt.target.value))
    }
  }
}

Editor = connect(undefined, mapDispatchToProps)(Editor)
export default Editor
