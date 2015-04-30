import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goToRouteIndex: function () {
      this.transitionToRoute("");
    },
    goToRouteEmber: function () {
      this.transitionToRoute("json");
    }
  }
});
