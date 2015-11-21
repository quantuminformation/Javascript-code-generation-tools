import React from 'react';
import ReactDOM from 'react-dom';

import EmberDataGenerator  from './generators/emberData.js';
import TypeScriptGenerator from './generators/typescript';
import ES6Generator        from './generators/ES6';
import BootstrapGenerator  from './generators/bootstrap';

var app = {
  jsonApi: "", //holds the text the users pastes in
  generatedText: "",
  renderedCode: "", //final text rendered from generatedText,
  /*  onrenderedCodeChange: Ember.observer('renderedCode', function () {
   Ember.$("#renderedCode").html(this.get("renderedCode"));
   }),*/

};

/*     <button className="btn btn-default" {{action 'generateCode' "TYPESCRIPT"}} role="button">TypeScript
 </button>
 <button className="btn btn-default" {{action 'generateCode' "ES6"}} role="button">ES6 model
 </button>
 <button className="btn btn-default" {{action 'generateCode' "BOOTSTRAP-3"}} role="button">Bootstrap 3 form
 </button>*/

var App = React.createClass({
  getInitialState: function () {
    return {
      jsonApi: "",
      generatedText: ""
    };
  },


  /**
   * @param event passed from the json template, which then is used to pick the renderer
   */

  generateCode: function (event) {
    var model = JSON.parse(document.getElementById("inputJSON").value);
    var code = "";
    switch (event.target.dataset.type) {
      case "EMBER_DATA":
      {
        code = EmberDataGenerator.generate(model, false);
        break;
      }
      case "ES6":
      {
        code = ES6Generator.generate(model, false);
        break;
      }
      case "TYPESCRIPT":
      {
        code = TypeScriptGenerator.generate(model, false);
        break;
      }
      case "BOOTSTRAP-3":
      {
        code = BootstrapGenerator.generate(model, false);
        break;
      }
      default:
        throw("bad type");
    }

    this.set("generatedCode", code);
    //wrap in <pre> block to make code well formatted
    this.set("renderedCode", '<pre>' + this.get("generatedCode") + '</pre>');
  },

  render: function () {

    return (
      <div>
        <div id="codeDisplays">
          <div className="flex1">
            <h2>Input JSON</h2>
            <input id="inputJSON" type="textarea" className="emberJson" placeholder='Paste JSON code here..'/> <br/><br/>
          </div>
          <div className="flex1">
            <h2>Output code</h2>
            <p id="renderedCode">foo</p>
          </div>
        </div>
        <h2>Generators</h2>
        <p>Click one of the following buttons to transform your json to the desired code.</p>
        <button onClick={this.generateCode} data-type="EMBER_DATA">Ember data
        </button>
      </div>
    );
  }
});


ReactDOM.render(
  <App />,
  document.getElementById('container')
);
