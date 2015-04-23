import Ember from 'ember';

export default Ember.Controller.extend({
  jsonApi: "", //holds the text the users pastes in
  generatedText: "",
  renderedCode: "", //final text rendered from generatedText,
  onrenderedCodeChange: Ember.observer('renderedCode', function () {
    $("#renderedCode").html(this.get("renderedCode"));
  }),
  actions: {
    generateEmberModel: function () {
      // var withReplacement = this.get("generatedCode").replace(self.get("MUTATIONS_PLACEHOLDER"), self.get("pendingGeneratedDomChangedScript"));

      var emberDataModel = "";
      var model = JSON.parse(this.get("jsonApi"));
      for (var prop in model) {
        if (model.hasOwnProperty(prop)) {
          if (model[prop].match(/^\d+(\.\d+)?$/)) { //its a number
            emberDataModel += prop + ': DS.attr("number"),  <br>';
          }
          else if (model[prop] === 'true' || model[prop] === 'false') { //its a bool
            emberDataModel += prop + ': DS.attr("boolean"),  <br>';
          }
          else { //its a string
            emberDataModel += prop + ': DS.attr("string"),   <br>';
          }
        }
      }
      //remove last comma
      emberDataModel = emberDataModel.replace(/(.*),/,'$1');

      this.set("generatedCode", emberDataModel);
      //   this.set("generatedCode", 12412);
      // self.set("generatedCode", withReplacement);
      //  self.set("pendingGeneratedDomChangedScript", "") //clear
      //wrap in <pre> block to make code well formatted
      this.set("renderedCode", '<pre>' + this.get("generatedCode") + '</pre>');
    }
  }
});
