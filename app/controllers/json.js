import Ember from 'ember';
import EmberDataGenerator from '../utils/generators/emberData';
import TypeScriptGenerator from '../utils/generators/typescript';
import ES6Generator from '../utils/generators/ES6';
import BootstrapGenerator from '../utils/generators/bootstrap';

export default Ember.Controller.extend({
  jsonApi: "", //holds the text the users pastes in
  generatedText: "",
  renderedCode: "", //final text rendered from generatedText,
  onrenderedCodeChange: Ember.observer('renderedCode', function () {
    Ember.$("#renderedCode").html(this.get("renderedCode"));
  }),
  actions: {
    /**
     * @param type passed from the json template, which then is used to pick the renderer
     */
    generateCode: function (type) {
      var model = JSON.parse(this.get("jsonApi"));
      var code = "";
      switch (type) {
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

    }
  }
});
