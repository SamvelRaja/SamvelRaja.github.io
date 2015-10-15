import Ember from 'ember';

export default Ember.Component.extend({
  doStuffWhenInserted: Ember.on('willRender', function() {
    var self = this;
    this.set('inputObj',{
      latitude : '12.976299881670053',
      longitude : '80.13112306594849',
      zoom : 7,
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
        content : '<div>Info window</div>',
        latitude : '11.976299881670053',
        longitude : '80.13112306594849',
        maxWidth : 500,
      },
      markers :[
        {
          latitude : '12.976299881670053',
          longitude : '80.13112306594849',
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
          latitude : '13.976299881670053',
          longitude : '80.13112306594849',
          title : 'first marker',
          click : function(rec_event){
            self.set('mapMessage','Marker_2_Click' + rec_event);
          },
          animation : 'BOUNCE',
          timeout : 4000,
          draggable : false
        }
     ]
   });
 })
  });
