import  React from 'react'
import {connect} from 'react-redux'

let RenderedCode = (props) => {

  function rawMarkup() {
    return {__html: props.outputCodeFromJSON};
  }

  return (
    <section className="flex1">
      <h2>Output code</h2>
      <p id="renderedCode" dangerouslySetInnerHTML={rawMarkup()}></p>
    </section>
  )
}

const mapStateToProps = ({jsonCodeTools}) => {
  return {
    outputCodeFromJSON: jsonCodeTools.outputCodeFromJSON
  }
}

export default connect(mapStateToProps)(RenderedCode)
