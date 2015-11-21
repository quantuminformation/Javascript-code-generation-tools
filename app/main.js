import React               from 'react';
import ReactDOM            from 'react-dom';
import EmberDataGenerator  from './generators/emberData.js';
import TypeScriptGenerator from './generators/typescript';
import ES6Generator        from './generators/ES6';
import BootstrapGenerator  from './generators/bootstrap';


var App = React.createClass({
  getInitialState: function () {
    return {
      jsonApi: "",
      outputCode: ""
    };
  },

  /**
   * @param event passed from the json template, which then is used to pick the renderer then set to the output code
   */
  generateCode: function (event) {

    var element = document.getElementById("inputJSON");
    if (!element.value) {
      alert("We can't parse an empty string");
      return; // we can't parse an empty string
    }

    var model = JSON.parse(element.value);
    var code = "";
    switch (event.target.dataset.type) {
      case "EMBER_DATA":
      {
        code = EmberDataGenerator.generate(model);
        break;
      }
      case "ES6":
      {
        code = ES6Generator.generate(model);
        break;
      }
      case "TYPESCRIPT":
      {
        code = TypeScriptGenerator.generate(model);
        break;
      }
      case "BOOTSTRAP-3":
      {
        code = BootstrapGenerator.generate(model);
        break;
      }
      default:
        throw("bad type");
    }

    this.setState({
      outputCode: '<pre>' + code + '</pre>'
    })
  },

  render: function () {

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
        <button onClick={this.generateCode} data-type="BOOTSTRAP-3">BOOTSTRAP-3
        </button>
        <div id="codeDisplays">
          <div className="flex1">
            <h2>Input JSON</h2>
            <input id="inputJSON" type="textarea" className="emberJson" placeholder='Paste JSON code here..'/>
            <br/><br/>
          </div>
          <div className="flex1">
            <h2>Output code</h2>
            <p id="renderedCode">{this.state.outputCode}</p>
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
