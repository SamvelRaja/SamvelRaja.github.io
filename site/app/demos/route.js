import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(){
    let appController = this.controllerFor('application');
    appController.setProperties(
      {
        current_path: 'Demos',
        isDetails: true
      });
    }
});
