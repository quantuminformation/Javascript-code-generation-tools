import React from 'react';
import ReactDOM from 'react-dom';
import Redux from 'redux';
import mainReducer from './reducers/mainReducer';
import actionTypes from './actions/actionTypes';


const {createStore}= Redux;
const store = createStore(mainReducer); 
console.log(store.getState());

var App = React.createClass({

  rawMarkup: function () {
    return {__html: store.outputCode};
  },

  render: function () {

    const setJSON = event => {
      store.dispatch({
        type: actionTypes.GENERATE_SOURCE,
        json: event.target.value
      })
    }

    return (
      <div>
        <h2>Generators</h2>
        <p>Click one of the following buttons to transform your json to the desired code.</p>
        <button onClick={this.generateCode} data-type="EMBER_DATA">Ember data
        </button>
        <button onClick={this.generateCode} data-type="TYPESCRIPT">TYPESCRIPT
        </button>
        <button onClick={this.generateCode} data-type="ES6">ES6
        </button>
        <button onClick={this.generateCode} data-type="BOOTSTRAP3">BOOTSTRAP3 Form
        </button>
        <div className="flex">
          <div className="flex1 padding1em">
            <h2>Input JSON</h2>
            <textarea id="codeInput" type="textarea" onChange={setJSON}
                      placeholder='Paste JSON code here..'></textarea>
            <br/><br/>
          </div>
          <div className="flex1 padding1em">
            <h2>Output code</h2>
            <p id="renderedCode" dangerouslySetInnerHTML={this.rawMarkup()}></p>
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('container')
);


