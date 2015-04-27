import Ember from 'ember';


export default Ember.Controller.extend({
  jsonApi: "", //holds the text the users pastes in
  generatedText: "",
  renderedCode: "", //final text rendered from generatedText,
  onrenderedCodeChange: Ember.observer('renderedCode', function () {
    Ember.$("#renderedCode").html(this.get("renderedCode"));
  }),
  actions: {
    generateEmberModel: function () {

      var indentation = '  ';//2 spaces
      //holds top level model
      var DSModel = "import DS from 'ember-data';<br><br>" +
        "export default DS.Model.extend({<br>";

      var fragments = []; //holds fragments
      var model = JSON.parse(this.get("jsonApi"));
      generatePart(model, false);
      // add model fragments
      fragments.forEach(item => {
        DSModel += item;
      })


      this.set("generatedCode", DSModel);
      //   this.set("generatedCode", 12412);
      // self.set("generatedCode", withReplacement);
      //  self.set("pendingGeneratedDomChangedScript", "") //clear
      //wrap in <pre> block to make code well formatted
      this.set("renderedCode", '<pre>' + this.get("generatedCode") + '</pre>');

      /**
       * this is used recursively to generate Ember data models code
       * @param model
       * @param isForFragment
       */
      function generatePart(model, isForFragment) {
        var part = isForFragment ? "export default DS.ModelFragment.extend({<br>" : "";
        for (var prop in model) {
          if (model.hasOwnProperty(prop)) {
            if (typeof (model[prop]) === 'object') { //send this off to a fragment
              generatePart(model[prop], true); //this will generate code that would  go in a seperate model fragment code
              part += indentation + prop + ': DS.hasOneFragment("' + prop + '"),  <br>';
            }
            else if (model[prop].match(/^\d+(\.\d+)?$/)) { //its a number
              part += indentation + prop + ': DS.attr("number"),  <br>';
            }
            else if (model[prop] === 'true' || model[prop] === 'false') { //its a bool
              part += indentation + prop + ': DS.attr("boolean"),  <br>';
            }
            else { //its a string
              part += indentation + prop + ': DS.attr("string"),   <br>';
            }
          }
        }
        //remove last comma
        part = part.replace(/(.*),/, '$1');
        part += '});<br><br>';

        if (!isForFragment) {
          DSModel += part;
        } else {
          fragments.push(part);
        }
      }
    }
  }
});
