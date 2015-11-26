import React               from 'react';
import ReactDOM            from 'react-dom';
import Radium              from 'radium';

import EmberDataGenerator  from './generators/emberData.js';
import TypeScriptGenerator from './generators/typescript';
import ES6Generator        from './generators/ES6';
import BootstrapGenerator  from './generators/bootstrap';
import styles  from './styles/main';

var App = React.createClass({
  getInitialState: function () {
    return {
      jsonApi: "",
      outputCode: ""
    };
  },

  rawMarkup: function () {
    return {__html: this.state.outputCode};
  },

  /**
   * @param event passed from the json template, which then is used to pick the renderer then set to the output code
   */
  generateCode: function (event) {

    const {jsonApi} = this.state;

    if (!jsonApi) {
      alert("We can't parse an empty string");
      return;
    }
    try {
      var model = JSON.parse(jsonApi);
    }
    catch (e) {
      alert(e.message);
    }
    const generators = {
      EMBER_DATA: EmberDataGenerator,
      ES6: ES6Generator,
      TYPESCRIPT: TypeScriptGenerator,
      BOOTSTRAP3: BootstrapGenerator
    }

    this.setState({
      outputCode: '<pre>' + generators[event.target.dataset.type].generate(model) + '</pre>' // assign output to result of generation
    })
  },

  render: function () {

    const {jsonApi} = this.state;
    const setJSON = event => {
      this.setState({jsonApi: event.target.value});
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
        <div style={styles.displayFlex}>
          <div style={styles.flex1}>
            <h2>Input JSON</h2>
            <input id="inputJSON" type="textarea" style={styles.input} onChange={setJSON} value={jsonApi}
                   placeholder='Paste JSON code here..'/>
            <br/><br/>
          </div>
          <div style={styles.flex1}>
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


