import React, {PropTypes} from 'react'
import {generateSource} from '../../actions'
import {connect} from 'react-redux'


let FromJsonGenerator = (props) => {


  function rawMarkup() {
    return {__html: props.outputCodeFromJSON};
  }

  // let textarea

  return (
    <section className="main">
      <h2>Generators</h2>
      <p>Click one of the following buttons to transform your json to the desired code.</p>
      <button onClick={
        ()=>props.dispatch(generateSource('EMBER_DATA', document.querySelector('#codeInput').value))
      }>Ember data
      </button>
      <button onClick={
        ()=>props.dispatch(generateSource('TYPESCRIPT', document.querySelector('#codeInput').value))
      }>TYPESCRIPT
      </button>
      <button onClick={
        ()=>props.dispatch(generateSource('ES6', document.querySelector('#codeInput').value))
      }>ES6
      </button>
      <button onClick={
        ()=>props.dispatch(generateSource('BOOTSTRAP3', document.querySelector('#codeInput').value))
      }>BOOTSTRAP3
      </button>


      <div className="flex">
        <div className="flex1 padding1em">
          <h2>Input JSON</h2>
          <textarea id="codeInput" type="textarea"
                    placeholder='Paste JSON code here..'>


          </textarea>
          <br/><br/>
        </div>
        <div className="flex1 padding1em">
          <h2>Output code</h2>
          <p id="renderedCode" dangerouslySetInnerHTML={rawMarkup()}></p>
        </div>
      </div>
    </section>
  )
}


const mapStateToProps = (state) => ({
  outputCodeFromJSON: state.outputCodeFromJSON
})


FromJsonGenerator = connect(mapStateToProps)(FromJsonGenerator)
export default FromJsonGenerator

