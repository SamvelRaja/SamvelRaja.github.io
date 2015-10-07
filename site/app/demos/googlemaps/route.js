import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(){
    let appController = this.controllerFor('application');
    appController.setProperties(
      {
        current_path: 'Demos/GoogleMaps',
        isDetails: false
      }
    );
    let detailsappController = this.controllerFor('demos');
    detailsappController.set('isDetails',false);
  },
  deactivate(){
    let detailsappController = this.controllerFor('demos');
    detailsappController.set('isDetails',true);
  }
});
