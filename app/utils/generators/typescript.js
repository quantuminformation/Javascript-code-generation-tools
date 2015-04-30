import Ember from 'ember';
import Common from '../../utils/generators/common';
var EmberDataGenerator = {
  children: [], //holds fragments
  outputCode: "",//holds the output code
  /**
   * this is used recursively to generate the ember data model
   * @param model
   * @param isForFragment
   * @param renderer this is what generates the code for the specific output language/framework
   */
  generatePart: function (model, isForFragment, renderer) {
    var part = isForFragment ? "export default DS.ModelFragment.extend({<br>" : "";
    for (var prop in model) {
      if (model.hasOwnProperty(prop)) {
        if (typeof (model[prop]) === 'object') { //send this off to a fragment
          this.generatePart(model[prop], true); //this will generate code that would  go in a seperate model fragment code
          part += Common.indentation + prop + ': DS.hasOneFragment("' + prop + '"),  <br>';
        }
        else if (model[prop].match(/^\d+(\.\d+)?$/)) { //its a number
          part += Common.indentation + prop + ': DS.attr("number"),  <br>';
        }
        else if (model[prop] === 'true' || model[prop] === 'false') { //its a bool
          part += Common.indentation + prop + ': DS.attr("boolean"),  <br>';
        }
        else { //its a string
          part += Common.indentation + prop + ': DS.attr("string"),   <br>';
        }
      }
    }
    //remove last comma
    part = part.replace(/(.*),/, '$1');
    part += '});<br><br>';

    if (!isForFragment) {
      this.outputCode += part;
    } else {
      this.children.push(part);
    }
  },

  generate: function (model) {
    //holds top level model
    this.outputCode = "import DS from 'ember-data';<br><br>" +
      "export default DS.Model.extend({<br>";

    this.generatePart(model, false);
    // add model fragments
    this.children.forEach(item => {
      this.outputCode += item;
    });
    return this.outputCode;
  }
};

export default EmberDataGenerator;
