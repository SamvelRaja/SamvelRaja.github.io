import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(){
    let appController = this.controllerFor('application');
    appController.set('current_path', 'Demos/GoogleMaps');
  }
});
