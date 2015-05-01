import Ember from 'ember';
import Common from '../../utils/generators/common';
var TypeScriptGenerator = {
  children: [], //holds fragments
  outputCode: "",//holds the output code


  //contants
  CLASS_START: "class Foo {<br><br>" +
  Common.indentation + "contructor() {<br>",
  /**
   * this is used recursively to generate the ember data model
   * @param model
   * @param isForChild
   */
  generatePart: function (model, isForChild) {
    var part = isForChild ? this.CLASS_START : "";
    for (var prop in model) {
      if (model.hasOwnProperty(prop)) {
        if (typeof (model[prop]) === 'object') { //send this off to a fragment
          this.generatePart(model[prop], true); //this will generate code that would  go in a seperate typescript class
          part += Common.indentationX2 + prop + ': ' + prop + ',  <br>';
        }
        else if (model[prop].match(/^\d+(\.\d+)?$/)) { //its a number
          part += Common.indentationX2 + prop + ': Number,  <br>';
        }
        else if (model[prop] === 'true' || model[prop] === 'false') { //its a bool
          part += Common.indentationX2 + prop + ': Boolean,  <br>';
        }
        else { //its a string
          part += Common.indentationX2 + prop + ': String,   <br>';
        }
      }
    }
    //remove last comma
    part = part.replace(/(.*),/, '$1');
    part += Common.indentation + '}<br>}<br>';

    if (!isForChild) {
      this.outputCode += part;
    } else {
      this.children.push(part);
    }
  },

  generate: function (model) {
    //holds top level model
    this.outputCode = this.CLASS_START;

    this.generatePart(model, false);
    // add model fragments
    this.children.forEach(item => {
      this.outputCode += item;
    });
    return this.outputCode;
  }
};

export default TypeScriptGenerator;
