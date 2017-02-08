import Common from './common';
var BootstrapGenerator = {
  children: [], //holds fragments
  outputCode: "",//holds the output code


  //contants
  CLASS_START: "export class Foo {<br>", //+
  // Common.indentation + "contructor() {<br>",
  /**
   * this is used recursively to generate the bootstrap code
   * @param model
   * @param isForChild
   */
  generatePart: function (model, isForChild, classname = "Foo") {
    let part = '&lt;form&gt;<br>';

    for (var prop in model) {
      if (model.hasOwnProperty(prop)) {
        if (typeof (model[prop]) === 'object') { //send this off to a fragment
          this.generatePart(model[prop], true, prop); //this will generate code that would  go in a separate typescript class
        }
        else if (model[prop].match(/^\d+(\.\d+)?$/)) { //its a number
          part += Common.indentation + '&lt;div class="form-group"&gt;<br>' +
            Common.indentationX2 + '&lt;label for="' + prop + '"&gt;' + prop + ':&lt;/label&gt;<br>' +
            Common.indentationX2 + '&lt;input type="number" class="form-control" id="' + prop + '"&gt;<br>' +
            Common.indentation + '&lt;/div&gt;<br>';
        }
        else if (model[prop] === 'true' || model[prop] === 'false') { //its a bool
          //todo have optional bootstrap toggle switch
          part += Common.indentation + '&lt;div class="form-group"&gt;<br>' +
            Common.indentationX2 + '&lt;label for="' + prop + '"&gt;' + prop + ':&lt;/label&gt;<br>' +
            Common.indentationX2 + '&lt;input type="checkbox" class="form-control" id="' + prop + '"&gt;<br>' +
            Common.indentation + '&lt;/div&gt;<br>';
        }
        else { //its a string
          part += Common.indentation + '&lt;div class="form-group"&gt;<br>' +
            Common.indentationX2 + '&lt;label for="' + prop + '"&gt;' + prop + ':&lt;/label&gt;<br>' +
            Common.indentationX2 + '&lt;input class="form-control" id="' + prop + '"&gt;<br>' +
            Common.indentation + '&lt;/div&gt;<br>';
        }
      }
    }
    part += '&lt;/form&gt;<br>';

    if (isForChild) {
      this.children.push(part);
    } else {
      this.outputCode += part;
    }
  },

  generate: function (model) {
    //reset the state
    this.outputCode = this.CLASS_START;
    this.children = [];

    this.generatePart(model, false);
    // add model fragments
    this.children.forEach(item => {
      this.outputCode += item;
    });
    return this.outputCode;
  }
};

export default BootstrapGenerator;
