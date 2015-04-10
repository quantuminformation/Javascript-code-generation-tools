import Ember from 'ember';

export default Ember.Controller.extend({
  jsonApi: "", //holds the text the users pastes in
  generatedText: "",
  renderedText: "", //final text rendered from generatedText,
  actions: {
    generateEmberModel: function () {
      var withReplacement = self.get("generatedScript").replace(self.get("MUTATIONS_PLACEHOLDER"), self.get("pendingGeneratedDomChangedScript"));

      this.get("jsonApi");

      self.set("generatedScript", withReplacement);
      self.set("pendingGeneratedDomChangedScript", "") //clear

      //wrap in <pre> block to make code well formatted
      self.set("renderedScript", '<pre>' + self.get("generatedScript") + '</pre>');
    }
  }



});

/*






 "accounts": [
 {
 "id": "851001590172",
 "holderName": "Mean Callaway",
 "supplyAddress": {
 "MPRN": null,
 "postalTown": "MANCHESTER",
 "houseName": "",
 "address": "48, Northland Road, MANCHESTER, M9 7AG",
 "county": "",
 "MPAN": null,
 "houseNumber": "48",
 "postcode": "M9 7AG",
 "addressLine2": "",
 "addressLine1": "Northland Road",
 "flatNumber": null
 }]







 "accounts": [
 {
 "id": "851001590172",
 "holderName": "Mean Callaway",
 "supplyAddress": {
 "MPRN": null,
 "postalTown": "MANCHESTER",
 "houseName": "",
 "address": "48, Northland Road, MANCHESTER, M9 7AG",
 "county": "",
 "MPAN": null,
 "houseNumber": "48",
 "postcode": "M9 7AG",
 "addressLine2": "",
 "addressLine1": "Northland Road",
 "flatNumber": null
 },
 "status": "Open",
 "responsibilityType": "Legal Payer",
 "type": "Energy",
 "subType": "Gas"
 },
 {
 "id": "851001590164",
 "holderName": "Whispering-Lies Buck Williams",
 "supplyAddress": {
 "MPRN": null,
 "postalTown": "WALTON-ON-THAMES",
 "houseName": "",
 "address": "53, Wellington Close, WALTON-ON-THAMES, SURREY, KT12 1BA",
 "county": "SURREY",
 "MPAN": null,
 "houseNumber": "53",
 "postcode": "KT12 1BA",
 "addressLine2": "",
 "addressLine1": "Wellington Close",
 "flatNumber": null
 },
 "status": "Open",
 "responsibilityType": "Legal Payer",
 "type": "Energy",
 "subType": "Gas"
 }
 ]


 */
