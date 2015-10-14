import Ember from 'ember';

export default Ember.Component.extend({
  doStuffWhenInserted: Ember.on('didRender', function() {
    $('#slider').jqSlide();
  })
});
