import Ember from 'ember';

export default Ember.Component.extend({
  latitude: '12.976299881670053',
  longitude: '80.13112306594849',
  zoom: 7,
  number : 1,
  infoWindowtext: "<div>InfoWindow</div>",
  inputObj: Ember.computed('zoom','latitude','longitude', 'infoWindowtext', function() {
    var self = this;
    return {
      latitude : self.get('latitude'),
      longitude : self.get('longitude'),
      zoom : Number(self.get('zoom')),
      click : function(){
        self.set('mapMessage','map_click');
      },
      dblclick : function(){
        self.set('mapMessage','map_double_click');
      },
      drag : function(){
        self.set('mapMessage','map_drag');
      },
      dragend : function(){
        self.set('mapMessage','map_dragend');
      },
      dragstart : function(){
        self.set('mapMessage','map_dragstart');
      },
      mousemove : function(){
        self.set('mapMessage','map_mousemove');
      },
      mouseout : function(){
        self.set('mapMessage','map_mouseout');
      },
      mouseover : function(){
        self.set('mapMessage','map_mouseover');
      },
      rightclick : function(){
        self.set('mapMessage','map_rightclick');
      },
      infowindow : {
        content : this.get('infoWindowtext'),
        latitude : '11.976299881670053',
        longitude : self.get('longitude'),
        maxWidth : 500,
      },
      markers :[
        {
          latitude : self.get('latitude'),
          longitude : self.get('longitude'),
          title : 'first marker',
          click : function(rec_event){
            self.set('mapMessage','Marker_1_click' + rec_event);
          },
          animation : 'DROP',
          timeout : 2000,
          draggable : true,
          infowindow : {
            content : '<div>Marker 1</div>',
          }
        },
        {
          latitude : self.get('latitude'),
          longitude : self.get('longitude'),
          title : 'first marker',
          click : function(rec_event){
            self.set('mapMessage','Marker_2_Click' + rec_event);
          },
          animation : 'BOUNCE',
          timeout : 4000,
          draggable : false
        }
     ]
   };
 }),
 inputObjString : Ember.computed('inputObj', function() {
   return JSON.stringify(this.get('inputObj'), null, 2);
 })
});
