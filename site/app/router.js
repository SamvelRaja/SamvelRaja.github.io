import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('demos',{
    resetNamespace: true
  },function() {
    this.route('googlemaps');
    this.route('jq-slide');
    });
});

export default Router;
